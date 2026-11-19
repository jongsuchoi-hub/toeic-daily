(() => {
  const STORE = "toeic800.v1";
  const LETTERS = ["A", "B", "C", "D"];
  const SECTIONS = {
    vocab: { name: "빈출 단어", short: "단어", sub: "10단어 뜻 고르기" },
    p5: { name: "문법 · Part 5", short: "문법", sub: "빈칸 10문제" },
    p2: { name: "듣기 · Part 2", short: "듣기", sub: "질문-응답 5문제" },
    p7: { name: "독해 · Part 7", short: "독해", sub: "지문 1개" },
  };
  // 이 날짜가 1일째. 문제는 쌓인 순서대로 하루치씩 넘어가고, 다 쓰면 처음으로 돌아갑니다.
  const START = Date.UTC(2026, 10, 18) / 86400000;
  const $app = document.getElementById("app");

  // ---------- 저장 ----------
  function load() {
    try {
      const s = JSON.parse(localStorage.getItem(STORE));
      if (s && s.log && s.wrong) { s.tags = s.tags || {}; s.progress = s.progress || {}; s.srs = s.srs || {}; s.seen = s.seen || {}; return s; }
    } catch (e) {}
    return { log: {}, wrong: {}, tags: {}, progress: {}, srs: {}, seen: {} };
  }
  let state = load();
  function save() {
    try { localStorage.setItem(STORE, JSON.stringify(state)); } catch (e) {}
  }

  // ---------- 날짜 ----------
  function dateKey(d) {
    const p = (n) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
  }
  const today = new Date();
  const TODAY = dateKey(today);
  const DAY = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) / 86400000 - START;

  function addDays(key, n) {
    const [y, m, d] = key.split("-").map(Number);
    return dateKey(new Date(y, m - 1, d + n));
  }

  // ---------- 간격 반복 복습 ----------
  // 틀린 문제는 1일 뒤 → 맞히면 3일 → 7일 → 14일 → 30일 뒤에 다시 나오고, 그것까지 맞히면 졸업합니다.
  const STEPS = [1, 3, 7, 14, 30];
  // 이 기능 전에 틀려 둔 문제는 오늘 복습으로 넣습니다
  Object.keys(state.wrong).forEach((k) => { if (!state.srs[k]) state.srs[k] = { box: 0, due: TODAY }; });

  function streak() {
    let n = 0;
    const d = new Date(today);
    if (!state.log[dateKey(d)]) d.setDate(d.getDate() - 1); // 오늘 아직 안 했으면 어제부터 셈
    while (state.log[dateKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  // ---------- 문제 만들기 ----------
  function shuffle(a) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // 뜻이 겹치는 단어(예: 상당한)는 오답 보기로 쓰지 않습니다
  const senses = (m) => m.replace(/\([^)]*\)/g, "").split(/[,;]/).map((x) => x.trim()).filter(Boolean);
  function vocabQ(i) {
    const [word, meaning] = VOCAB[i];
    const mine = senses(meaning);
    const pool = VOCAB.filter((v, k) => k !== i && !senses(v[1]).some((s) => mine.includes(s))).map((v) => v[1]);
    const choices = shuffle([meaning, ...shuffle(pool).slice(0, 3)]);
    return { key: "v-" + i, kind: "vocab", tag: "단어", word, ex: VOCAB[i][2], choices,
      answer: choices.indexOf(meaning), explain: `${word} = ${meaning}` };
  }
  // 보기 순서를 섞고, 해설 속 (A)(B) 글자도 새 순서에 맞춰 바꿉니다
  function mix(choices, answer, explain) {
    const perm = shuffle(choices.map((_, k) => k));
    return {
      choices: perm.map((k) => choices[k]),
      answer: perm.indexOf(answer),
      explain: explain.replace(/\(([A-D])\)/g, (_, L) => `(${LETTERS[perm.indexOf(LETTERS.indexOf(L))]})`),
    };
  }
  function p5Q(i) {
    const [s, choices, answer, tag, explain] = PART5[i];
    return { key: "p5-" + i, kind: "p5", sentence: s, tag, ...mix(choices, answer, explain) };
  }
  function p2Q(i) {
    const [q, choices, answer, explain, tag] = PART2[i];
    return { key: "p2-" + i, kind: "p2", q, tag, ...mix(choices, answer, explain) };
  }
  function p7Q(p, j) {
    const [q, choices, answer, explain, tag] = PART7[p].qs[j];
    return { key: `p7-${p}-${j}`, kind: "p7", p, q, tag, ...mix(choices, answer, explain) };
  }
  function fromKey(key) {
    const [k, a, b] = key.split("-");
    if (k === "v") return VOCAB[+a] ? vocabQ(+a) : null;
    if (k === "p5") return PART5[+a] ? p5Q(+a) : null;
    if (k === "p2") return PART2[+a] ? p2Q(+a) : null;
    if (k === "p7") return PART7[+a] && PART7[+a].qs[+b] ? p7Q(+a, +b) : null;
    return null;
  }
  const mod = (x, n) => ((x % n) + n) % n;
  function range(start, count, len) {
    return Array.from({ length: count }, (_, k) => mod(start + k, len));
  }
  function todaySet(sec) {
    if (sec === "vocab") return range(DAY * 10, 10, VOCAB.length).map(vocabQ);
    if (sec === "p5") {
      const idx = range(DAY * 10, 10, PART5.length);
      return [...idx.map(p5Q), ...focusExtra("p5", PART5, 3, p5Q, idx)];
    }
    if (sec === "p2") {
      const idx = range(DAY * 5, 5, PART2.length);
      return [...idx.map(p2Q), ...focusExtra("p2", PART2, 4, p2Q, idx)];
    }
    const p = mod(DAY, PART7.length);
    return PART7[p].qs.map((_, j) => p7Q(p, j));
  }
  // 풀다 만 곳: 영역별(오답 다시 풀기는 review)로 오늘 것만 이어 갑니다
  function saved(key) {
    const p = state.progress[key];
    return p && p.date === TODAY && p.i < p.qs.length ? p : null;
  }
  function start(sec) {
    const p = saved(sec);
    if (p) quiz(p.qs, p.opt, p);
    else quiz(todaySet(sec), { sec });
  }
  function dueKeys() {
    return Object.entries(state.srs)
      .filter(([k, v]) => v.due <= TODAY && fromKey(k))
      .sort((a, b) => a[1].due.localeCompare(b[1].due))
      .map(([k]) => k);
  }
  const srsSet = () => dueKeys().slice(0, 15).map(fromKey);
  function nextDue() {
    const later = Object.values(state.srs).filter((v) => v.due > TODAY).map((v) => v.due).sort();
    return later.length ? { date: later[0], n: later.filter((d) => d === later[0]).length } : null;
  }
  // 정답률이 70% 아래인 가장 약한 유형에서, 아직 안 본 문제를 3개 더 얹습니다
  function focusExtra(kind, list, tagAt, make, taken) {
    let worst = null;
    Object.entries(state.tags).forEach(([g, [c, t]]) => {
      const [k, tag] = g.split(":");
      if (k !== kind || t < 4 || c / t >= 0.7) return;
      if (!worst || c / t < worst.r) worst = { tag, r: c / t };
    });
    if (!worst) return [];
    const pool = list.map((_, i) => i)
      .filter((i) => list[i][tagAt] === worst.tag && !taken.includes(i) && !state.seen[`${kind}-${i}`]);
    return shuffle(pool).slice(0, 3).map((i) => ({ ...make(i), focus: true }));
  }
  const groupOf = (q) => `${q.kind}:${q.tag}`;
  const groupName = (g) => {
    const [kind, tag] = g.split(":");
    return kind === "vocab" ? "단어" : `${SECTIONS[kind].short} · ${tag}`;
  };

  // ---------- 음성 ----------
  let voice = null;
  function pickVoice() {
    if (!("speechSynthesis" in window)) return;
    const vs = speechSynthesis.getVoices();
    voice = vs.find((v) => v.lang === "en-US") || vs.find((v) => /^en/i.test(v.lang)) || null;
  }
  if ("speechSynthesis" in window) {
    pickVoice();
    speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(lines) {
    if (!("speechSynthesis" in window)) return false;
    speechSynthesis.cancel();
    lines.forEach((t) => {
      const u = new SpeechSynthesisUtterance(t);
      u.lang = "en-US";
      if (voice) u.voice = voice;
      u.rate = 0.92;
      speechSynthesis.speak(u);
    });
    return true;
  }
  function p2Lines(q) {
    return [q.q, ...q.choices.map((c, i) => `${LETTERS[i]}. ${c}`)];
  }

  // ---------- 화면 ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const nl = (s) => esc(s).replace(/\n/g, "<br>");

  function home() {
    if ("speechSynthesis" in window) speechSynthesis.cancel();
    const log = state.log[TODAY] || {};
    const done = Object.keys(SECTIONS).filter((s) => log[s]).length;
    const wrongN = Object.keys(state.wrong).filter(fromKey).length;
    const st = streak();
    const weak = weakGroups().filter((g) => g.wrong > 0)[0];

    const days = [];
    for (let k = 6; k >= 0; k--) {
      const d = new Date(today); d.setDate(d.getDate() - k);
      const l = state.log[dateKey(d)] || {};
      const n = Object.keys(SECTIONS).filter((s) => l[s]).length;
      days.push({ label: ["일", "월", "화", "수", "목", "금", "토"][d.getDay()], n, isToday: k === 0 });
    }
    const tot = {};
    Object.values(state.log).forEach((l) => Object.entries(l).forEach(([s, [c, t]]) => {
      tot[s] = tot[s] || [0, 0]; tot[s][0] += c; tot[s][1] += t;
    }));

    $app.innerHTML = `
      <header class="top">
        <div>
          <p class="eyebrow">${today.getMonth() + 1}월 ${today.getDate()}일 · 목표 800+</p>
          <h1>오늘의 토익</h1>
        </div>
        <div class="streak"><b>${st}</b><span>일 연속</span></div>
      </header>

      <div class="bar"><i style="width:${done * 25}%"></i></div>
      <p class="muted small">${done === 4 ? "오늘 분량을 다 하셨습니다." : `오늘 ${done} / 4 완료`}</p>

      ${srsCard(log)}

      <section class="cards">
        ${Object.entries(SECTIONS).map(([s, v]) => {
          const r = log[s];
          const p = saved(s);
          const label = p ? `이어서 하기 · ${p.i + (p.picked == null ? 0 : 1)}/${p.qs.length} →`
            : r ? `✓ ${r[0]}/${r[1]} 정답 · 다시` : "시작 →";
          return `<button class="card ${r && !p ? "done" : ""} ${p ? "going" : ""}" data-sec="${s}">
            <span class="card-t">${v.name}</span>
            <span class="card-s">${v.sub}</span>
            <span class="card-r">${label}</span>
          </button>`;
        }).join("")}
      </section>

      <button class="wide ${wrongN ? "" : "ghost"}" id="wrong">
        약점 노트 · 오답 <b>${wrongN}</b>
        ${weak ? `<span class="sub">가장 약한 유형: ${esc(groupName(weak.g))}</span>` : ""}
      </button>

      <section class="panel">
        <h2>최근 7일</h2>
        <div class="week">${days.map((d) => `
          <div class="day ${d.isToday ? "today" : ""}">
            <i class="dot l${d.n}"></i><span>${d.label}</span>
          </div>`).join("")}</div>
        <h2>영역별 누적 정답률</h2>
        <ul class="acc">${Object.entries(SECTIONS).map(([s, v]) => {
          const t = tot[s];
          const pct = t && t[1] ? Math.round((t[0] / t[1]) * 100) : null;
          return `<li><span>${v.name}</span><span class="accbar"><i style="width:${pct || 0}%"></i></span><b>${pct === null ? "–" : pct + "%"}</b></li>`;
        }).join("")}</ul>
      </section>

      <p class="foot">직접 만든 연습문제입니다(실제 기출 아님). 기록은 이 브라우저에만 저장됩니다.<br>
        문법·듣기는 정답률 70% 아래인 유형에서 3문제를 더 냅니다.<br>
        문제 수: 단어 ${VOCAB.length} · 문법 ${PART5.length} · 듣기 ${PART2.length} · 지문 ${PART7.length}</p>
    `;
    $app.querySelectorAll("[data-sec]").forEach((b) =>
      b.addEventListener("click", () => start(b.dataset.sec)));
    document.getElementById("wrong").addEventListener("click", weakNote);
    const sb = document.getElementById("srs");
    if (sb) sb.addEventListener("click", () => {
      const p = saved("srs");
      if (p) quiz(p.qs, p.opt, p);
      else quiz(srsSet(), { review: "오늘의 복습", srs: true });
    });
    window.scrollTo(0, 0);
  }

  function srsCard(log) {
    const due = dueKeys().length;
    const p = saved("srs");
    const why = "틀린 문제가 1·3·7·14·30일 간격으로 다시 나옵니다. 다섯 번 통과하면 졸업.";
    if (p) return `<button class="wide" id="srs">오늘의 복습 · 이어서 하기 ${p.i + (p.picked == null ? 0 : 1)}/${p.qs.length}<span class="sub">${why}</span></button>`;
    if (due) return `<button class="wide" id="srs">오늘의 복습 <b>${Math.min(due, 15)}</b>문제${due > 15 ? ` (밀린 ${due - 15}문제는 다음에)` : ""}<span class="sub">${why}</span></button>`;
    const nx = nextDue();
    const [, m, d] = nx ? nx.date.split("-").map(Number) : [];
    return `<div class="wide ghost static">${log.srs ? "✓ 오늘 복습 완료" : "오늘 복습할 문제 없음"}
      <span class="sub">${nx ? `다음 복습: ${m}월 ${d}일 · ${nx.n}문제` : why}</span></div>`;
  }

  // 유형별로 묶기: 오답 수가 많고 정답률이 낮은 유형이 위로
  function weakGroups() {
    const items = Object.keys(state.wrong).map(fromKey).filter(Boolean);
    const g = {};
    Object.entries(state.tags).forEach(([k, [c, t]]) => { g[k] = { g: k, c, t, items: [] }; });
    items.forEach((q) => {
      const k = groupOf(q);
      g[k] = g[k] || { g: k, c: 0, t: 0, items: [] };
      g[k].items.push(q);
    });
    return Object.values(g)
      .map((x) => ({ ...x, wrong: x.items.length, pct: x.t ? Math.round((x.c / x.t) * 100) : null }))
      .sort((a, b) => b.wrong - a.wrong || (a.pct ?? 101) - (b.pct ?? 101));
  }

  function weakNote() {
    const groups = weakGroups();
    const all = groups.flatMap((x) => x.items);
    $app.innerHTML = `
      <header class="top"><button class="back" id="back">← 처음으로</button></header>
      <h1>약점 노트</h1>
      <p class="muted small">틀린 문제를 유형별로 묶었습니다. 오답이 많은 유형부터 보입니다. 다시 풀어 맞히면 노트에서 빠집니다.</p>
      ${groups.length ? "" : `<p class="muted">아직 푼 문제가 없습니다. 오늘의 문제부터 풀어 보세요.</p>`}
      ${saved("review") ? `<button class="wide" id="resume">이어서 풀기 · ${esc(saved("review").opt.review)} (${saved("review").i + 1}/${saved("review").qs.length})</button>` : ""}
      ${all.length ? `<button class="wide ${saved("review") ? "ghost" : ""}" id="redoAll">오답 ${all.length}문제 전부 다시 풀기</button>` : ""}
      <ul class="groups">${groups.map((x, gi) => `
        <li class="group ${x.wrong ? "" : "clear"}">
          <div class="ghead">
            <div>
              <b>${esc(groupName(x.g))}</b>
              <span class="muted small">${x.t ? `정답률 ${x.pct}% (${x.c}/${x.t})` : "기록 없음"}</span>
            </div>
            ${x.wrong ? `<button class="mini strong" data-redo="${gi}">${x.wrong}문제 다시 풀기</button>` : `<span class="okmark">오답 없음</span>`}
          </div>
          ${x.t ? `<span class="accbar"><i style="width:${x.pct}%"></i></span>` : ""}
          ${x.wrong ? `<details><summary>틀린 문제 보기</summary>
            <ul class="notes">${x.items.map((q) => {
              const head = q.kind === "vocab" ? `<b>${esc(q.word)}</b>` : q.kind === "p5" ? esc(q.sentence) : esc(q.q);
              return `<li>${head}
                <div class="ans">정답: ${esc(q.choices[q.answer])}</div>
                <div class="exp">${esc(q.explain)}</div>
                <span class="muted small">${state.wrong[q.key].n}번 틀림</span>
                <button class="mini" data-del="${q.key}">외웠어요</button></li>`;
            }).join("")}</ul></details>` : ""}
        </li>`).join("")}
      </ul>`;
    document.getElementById("back").addEventListener("click", home);
    const rs = document.getElementById("resume");
    if (rs) rs.addEventListener("click", () => { const p = saved("review"); quiz(p.qs, p.opt, p); });
    const ra = document.getElementById("redoAll");
    if (ra) ra.addEventListener("click", () => quiz(shuffle(all), { review: "오답 전부 다시 풀기" }));
    $app.querySelectorAll("[data-redo]").forEach((b) => b.addEventListener("click", () => {
      const x = groups[+b.dataset.redo];
      quiz(shuffle(x.items), { review: groupName(x.g) });
    }));
    $app.querySelectorAll("[data-del]").forEach((b) => b.addEventListener("click", () => {
      delete state.wrong[b.dataset.del]; delete state.srs[b.dataset.del]; save(); weakNote();
    }));
    window.scrollTo(0, 0);
  }

  function quiz(qs, opt, resume) {
    let i = resume ? resume.i : 0, correct = resume ? resume.correct : 0;
    const title = opt.review || SECTIONS[opt.sec].name;
    const pkey = opt.srs ? "srs" : opt.review ? "review" : opt.sec;
    // 한 문제마다 자동 저장: 어느 문제까지 왔는지, 지금 문제에서 무엇을 골랐는지
    function keep(picked) {
      state.progress[pkey] = { date: TODAY, qs, i, correct, opt, picked };
      save();
    }

    function show(autoplay) {
      const q = qs[i];
      const n = q.kind === "p2" ? 3 : 4;
      let body = "";
      if (q.kind === "vocab") {
        body = `<div class="word">${esc(q.word)} <button class="icon" id="say" aria-label="발음 듣기">🔊</button></div>
          <p class="ex">${esc(q.ex)}</p><p class="ask">뜻으로 맞는 것은?</p>`;
      } else if (q.kind === "p5") {
        body = `<p class="tag">${esc(q.tag)}</p><p class="sent">${esc(q.sentence).replace("------", '<span class="blank">______</span>')}</p>`;
      } else if (q.kind === "p2") {
        body = `<p class="tag">${esc(q.tag)}</p><p class="ask">질문과 세 개의 응답을 듣고 가장 알맞은 응답을 고르세요.</p>
          <button class="play" id="play">▶ 듣기</button>
          <button class="link" id="script">음성이 안 나오면 대본 보기</button>
          <div class="script" id="scr" hidden>${p2Lines(q).map(esc).join("<br>")}</div>`;
      } else {
        const P = PART7[q.p];
        body = `<div class="passage"><p class="ptitle">${esc(P.title)}</p>${nl(P.text)}</div>
          <p class="tag">${esc(q.tag)}</p><p class="sent">${esc(q.q)}</p>`;
      }
      if (q.focus) body = `<p class="focus">약점 집중 · 정답률이 낮은 유형에서 더 나온 문제</p>` + body;
      const choiceText = (c) => q.kind === "p2" ? "" : esc(c);
      $app.innerHTML = `
        <header class="top"><button class="back" id="back">← 그만하기 · 자동 저장</button>
          <span class="muted small">${esc(title)} · ${i + 1} / ${qs.length}</span></header>
        <div class="bar"><i style="width:${(i / qs.length) * 100}%"></i></div>
        <article class="q">${body}</article>
        <div class="choices ${q.kind === "p2" ? "row" : ""}">
          ${Array.from({ length: n }, (_, k) =>
            `<button class="choice" data-k="${k}"><b>(${LETTERS[k]})</b> ${choiceText(q.choices[k])}</button>`).join("")}
        </div>
        <div id="fb"></div>`;
      document.getElementById("back").addEventListener("click", home);
      if (q.kind === "vocab") document.getElementById("say").addEventListener("click", () => speak([q.word, q.ex]));
      if (q.kind === "p2") {
        document.getElementById("play").addEventListener("click", () => speak(p2Lines(q)));
        document.getElementById("script").addEventListener("click", () => {
          document.getElementById("scr").hidden = false;
          document.getElementById("script").remove();
        });
        if (autoplay) speak(p2Lines(q));
      }
      $app.querySelectorAll(".choice").forEach((b) => b.addEventListener("click", () => pick(+b.dataset.k)));
      window.scrollTo(0, 0);
      keep(null);
    }

    function pick(k, restoring) {
      const q = qs[i];
      const ok = k === q.answer;
      if (!restoring) { // 이어서 열 때는 이미 센 점수를 다시 세지 않습니다
        if (ok) correct++;
        const g = groupOf(q);
        state.tags[g] = state.tags[g] || [0, 0];
        state.tags[g][1]++; if (ok) state.tags[g][0]++;
        if (ok && opt.review) delete state.wrong[q.key];
        if (!ok) state.wrong[q.key] = { n: ((state.wrong[q.key] || {}).n || 0) + 1, last: TODAY };
        state.seen[q.key] = 1;
        const r = state.srs[q.key];
        if (!ok) { state.srs[q.key] = { box: 0, due: addDays(TODAY, STEPS[0]) }; q.next = "내일 복습에 다시 나옵니다."; }
        else if (r && r.due <= TODAY) { // 복습할 날에 맞혔을 때만 다음 간격으로
          const box = r.box + 1;
          if (box >= STEPS.length) { delete state.srs[q.key]; delete state.wrong[q.key]; q.next = "간격 복습 다섯 번 통과 · 졸업입니다."; }
          else { state.srs[q.key] = { box, due: addDays(TODAY, STEPS[box]) }; q.next = `다음 복습은 ${STEPS[box]}일 뒤입니다.`; }
        }
        keep(k);
      }
      $app.querySelectorAll(".choice").forEach((b) => {
        const kk = +b.dataset.k;
        b.disabled = true;
        if (kk === q.answer) b.classList.add("right");
        else if (kk === k) b.classList.add("wrong");
        if (q.kind === "p2") b.innerHTML = `<b>(${LETTERS[kk]})</b> ${esc(q.choices[kk])}`;
      });
      if (q.kind === "p2") {
        const s = document.getElementById("scr");
        s.hidden = false; s.innerHTML = `<b>Q.</b> ${esc(q.q)}`;
        const l = document.getElementById("script"); if (l) l.remove();
      }
      const last = i === qs.length - 1;
      document.getElementById("fb").innerHTML = `
        <div class="fb ${ok ? "ok" : "no"}">
          <b>${ok ? "정답입니다" : `오답 · 정답은 (${LETTERS[q.answer]})`}</b>
          <p>${esc(q.explain)}</p>
          ${q.next ? `<p class="next">${esc(q.next)}</p>` : ""}
        </div>
        <button class="wide" id="next">${last ? "결과 보기" : "다음 →"}</button>`;
      document.getElementById("next").addEventListener("click", () => {
        if (last) return finish();
        i++; show(true);
      });
      if (!restoring) document.getElementById("next").scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    function finish() {
      if ("speechSynthesis" in window) speechSynthesis.cancel();
      delete state.progress[pkey];
      save();
      if (!opt.review || opt.srs) {
        state.log[TODAY] = state.log[TODAY] || {};
        state.log[TODAY][opt.srs ? "srs" : opt.sec] = [correct, qs.length];
        save();
      }
      const pct = Math.round((correct / qs.length) * 100);
      const left = Object.keys(SECTIONS).filter((s) => !(state.log[TODAY] || {})[s]);
      $app.innerHTML = `
        <div class="result">
          <p class="eyebrow">${esc(title)}</p>
          <div class="big">${correct} <span>/ ${qs.length}</span></div>
          <p>${pct}% 정답${correct < qs.length ? " · 틀린 문제는 내일 복습에 다시 나옵니다." : ""}</p>
          ${!opt.review && left.length ? `<button class="wide" id="go">다음: ${SECTIONS[left[0]].name} →</button>` : ""}
          ${opt.review ? `<button class="wide" id="note">약점 노트로</button>` : ""}
          <button class="wide ghost" id="home">처음으로</button>
        </div>`;
      const go = document.getElementById("go");
      if (go) go.addEventListener("click", () => start(left[0]));
      const nt = document.getElementById("note");
      if (nt) nt.addEventListener("click", weakNote);
      document.getElementById("home").addEventListener("click", home);
      window.scrollTo(0, 0);
    }

    if (!qs.length) return home();
    show(false);
    if (resume && resume.picked != null) pick(resume.picked, true);
  }

  home();
})();
