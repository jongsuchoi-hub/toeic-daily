// 1개월 치 Part 3 대화 (직접 작성한 연습문제, 실제 기출 아님)
// lines: [화자, 대사]  화자 W=여자, M=남자, M2=두 번째 남자
// qs: [질문, 보기 4개, 정답 번호, 해설, 유형]
(() => {
  const T = "주제·목적", S = "화자·장소", D = "세부 사항", N = "요청·제안·다음 행동", I = "의도 파악", F = "추론";
  PART3.push(
    { lines: [
        ["W", "Hi, Tom. The printer on our floor is out of toner again. Do you know if we have any extra cartridges?"],
        ["M", "I checked the supply room this morning, and we're out. I can place an order with our supplier now."],
        ["W", "Thanks. Could you ask for express delivery? I need to print the handouts for tomorrow's workshop."],
        ["M", "Sure. In the meantime, you could use the printer on the third floor."]],
      qs: [
        ["What problem does the woman mention?", ["A printer is out of toner.", "A workshop has been canceled.", "The supply room is locked.", "Some handouts contain errors."], 0, "첫 문장: The printer ... is out of toner again.", D],
        ["What does the woman ask the man to do?", ["Request express delivery", "Print some handouts", "Cancel an order", "Call a technician"], 0, "Could you ask for express delivery?", N],
        ["What does the man suggest?", ["Using another printer", "Postponing the workshop", "Borrowing a laptop", "E-mailing the handouts"], 0, "you could use the printer on the third floor.", N],
      ] },
    { lines: [
        ["M", "Good afternoon, Harbor View Restaurant. How can I help you?"],
        ["W", "Hi, I'd like to book a table for six people this Friday at 7 P.M."],
        ["M", "I'm sorry, we're fully booked at seven. We do have a table available at eight thirty."],
        ["W", "That's a little late. Do you have anything earlier?"],
        ["M", "We have a table at six o'clock, but it's on the outdoor patio."],
        ["W", "That's fine. The weather is supposed to be nice. Let's do that."]],
      qs: [
        ["Where does the man most likely work?", ["At a restaurant", "At a hotel", "At a travel agency", "At a catering company"], 0, "전화를 Harbor View Restaurant 이름으로 받습니다.", S],
        ["Why does the woman say, \"That's a little late\"?", ["She would prefer an earlier time.", "She will arrive late.", "She wants to cancel her booking.", "The restaurant closes early."], 0, "8시 30분은 늦으니 더 이른 시간이 있는지 묻습니다.", I],
        ["What time will the woman's group most likely arrive?", ["At 6:00", "At 7:00", "At 7:30", "At 8:30"], 0, "6시 야외 테이블로 하겠다고 합니다.", F],
      ] },
    { lines: [
        ["W", "Hi, I'm Grace Lim. Today is my first day in the accounting department."],
        ["M", "Welcome, Grace. I'm Daniel, the office manager. Before you start, you'll need to pick up your ID badge from the security office on the first floor."],
        ["W", "OK. Do I need to bring anything?"],
        ["M", "Just your driver's license or passport. After that, come back here, and I'll show you your desk."]],
      qs: [
        ["Who most likely is the woman?", ["A new employee", "A security guard", "An office manager", "A job applicant"], 0, "Today is my first day.", S],
        ["Where should the woman go first?", ["To the security office", "To the accounting department", "To the human resources office", "To the front desk"], 0, "pick up your ID badge from the security office.", D],
        ["What does the woman need to bring?", ["A form of identification", "A signed contract", "A photograph", "A bank card"], 0, "운전면허증이나 여권 = 신분증(identification). 패러프레이즈에 주의.", D],
      ] },
    { lines: [
        ["M", "Hi, Ms. Ortega. This is Kevin from Brightline Supplies. I'm calling about your order of office chairs."],
        ["W", "Oh, yes. They were supposed to arrive yesterday."],
        ["M", "I apologize. There was a problem at our warehouse, so the chairs won't arrive until Thursday. To make up for the delay, we'll give you a fifteen percent discount."],
        ["W", "Thursday should be OK. Thanks for letting me know."]],
      qs: [
        ["Why is the man calling?", ["To report a delivery delay", "To confirm a payment", "To take a new order", "To schedule a repair"], 0, "의자가 목요일에나 도착한다고 알리는 전화입니다.", T],
        ["According to the man, what caused the problem?", ["An issue at a warehouse", "Bad weather", "An incorrect address", "A defective product"], 0, "There was a problem at our warehouse.", D],
        ["What does the man offer?", ["A discount", "Free shipping", "A full refund", "Different chairs"], 0, "a fifteen percent discount.", D],
      ] },
    { lines: [
        ["W", "Mark, the client from Seoul just e-mailed. Her flight was delayed, so she can't make it to our ten o'clock meeting."],
        ["M", "That's too bad. Did she suggest another time?"],
        ["W", "She said she could come in at three this afternoon."],
        ["M", "Hmm, I have a training session until three thirty."],
        ["W", "Then how about four?"],
        ["M", "Four works. I'll book the conference room and let the design team know."]],
      qs: [
        ["Why can't the client attend the morning meeting?", ["Her flight was delayed.", "She is not feeling well.", "She forgot about it.", "She has another meeting."], 0, "Her flight was delayed.", D],
        ["Why does the man say, \"I have a training session until three thirty\"?", ["He is not available at three.", "He wants to cancel the meeting.", "He will arrive late to the training.", "He needs a larger room."], 0, "고객이 제안한 3시에는 안 된다는 뜻입니다.", I],
        ["What will the man most likely do next?", ["Reserve a meeting room", "E-mail the client", "Cancel the training session", "Pick up the client at the airport"], 0, "I'll book the conference room.", N],
      ] },
    { lines: [
        ["M", "Hi, I'm interested in joining the gym. Could you tell me about your membership options?"],
        ["W", "Sure. A monthly membership is fifty dollars, or you can pay five hundred dollars for a full year."],
        ["M", "Do both options include fitness classes?"],
        ["W", "The yearly membership includes all classes. With the monthly plan, classes are ten dollars each."],
        ["M", "I'll probably take a lot of classes, so the yearly plan sounds better."]],
      qs: [
        ["Where most likely are the speakers?", ["At a fitness center", "At a bank", "At a school", "At a medical clinic"], 0, "joining the gym.", S],
        ["What is included in the yearly membership?", ["Fitness classes", "A personal trainer", "Free parking", "Towel service"], 0, "The yearly membership includes all classes.", D],
        ["Which membership will the man most likely choose?", ["The yearly membership", "The monthly membership", "A free trial", "A family membership"], 0, "the yearly plan sounds better.", F],
      ] },
    { lines: [
        ["W", "Excuse me, I dropped off my laptop for repair last week. My name is Susan Park."],
        ["M", "Let me check. Yes, Ms. Park. The technician replaced the keyboard, and it's ready for pickup."],
        ["W", "Great. How much do I owe?"],
        ["M", "Since your laptop is still under warranty, there's no charge. I just need you to sign this form."]],
      qs: [
        ["Why is the woman at the store?", ["To pick up a repaired item", "To buy a new laptop", "To return a keyboard", "To make a complaint"], 0, "수리 맡긴 노트북을 찾으러 왔습니다.", T],
        ["What did the technician do?", ["Replaced a keyboard", "Replaced a screen", "Installed some software", "Cleaned the laptop"], 0, "The technician replaced the keyboard.", D],
        ["Why doesn't the woman have to pay?", ["The laptop is under warranty.", "She has a coupon.", "The repair was not finished.", "She is a store member."], 0, "still under warranty, there's no charge.", D],
      ] },
    { lines: [
        ["M", "Lisa, have you booked your hotel for the conference in Chicago?"],
        ["W", "Not yet. I was going to stay at the hotel where the conference is being held, but it's fully booked."],
        ["M", "There's a hotel just across the street. I stayed there last year, and it was comfortable."],
        ["W", "Thanks for the tip. I'll call them this afternoon."]],
      qs: [
        ["What are the speakers discussing?", ["A hotel for a business trip", "A conference schedule", "Flight tickets", "A restaurant reservation"], 0, "출장 숙소 이야기입니다.", T],
        ["What problem does the woman mention?", ["A hotel is fully booked.", "A conference was canceled.", "A flight was delayed.", "A reservation was lost."], 0, "it's fully booked.", D],
        ["What will the woman do this afternoon?", ["Contact a hotel", "Register for the conference", "Book a flight", "Meet with the man"], 0, "I'll call them this afternoon.", N],
      ] },
    { lines: [
        ["W", "These strawberries look great. Are they grown locally?"],
        ["M", "Yes, they're from our farm, about twenty minutes from here. We picked them this morning."],
        ["W", "How much is a box?"],
        ["M", "Six dollars a box, or two boxes for ten dollars."],
        ["W", "I'll take two, then. Do you accept credit cards?"],
        ["M", "Sorry, only cash today. Our card reader isn't working."]],
      qs: [
        ["Who most likely is the man?", ["A farmer", "A chef", "A delivery driver", "A store manager"], 0, "they're from our farm ... We picked them.", S],
        ["How much will the woman pay?", ["$10", "$6", "$12", "$20"], 0, "두 상자에 10달러. 6×2=12는 함정입니다.", F],
        ["What problem does the man mention?", ["A card reader is not working.", "The strawberries are sold out.", "Prices have gone up.", "The farm is closed."], 0, "Our card reader isn't working.", D],
      ] },
    { lines: [
        ["M", "Jenny, I looked at the draft of our new website. It looks much more modern."],
        ["W", "Thanks. Did you have any suggestions?"],
        ["M", "The menu at the top is a little hard to read on a phone. Maybe the font could be bigger."],
        ["W", "Good point. Most of our customers visit the site on their phones. I'll fix it before Friday's launch."]],
      qs: [
        ["What are the speakers discussing?", ["A website design", "A new phone", "A restaurant menu", "A launch party"], 0, "새 웹사이트 초안 이야기입니다. menu는 사이트 메뉴입니다.", T],
        ["What does the man suggest?", ["Making the text larger", "Adding more photos", "Changing the colors", "Delaying the launch"], 0, "Maybe the font could be bigger.", N],
        ["What does the woman say about the customers?", ["Most of them use phones.", "They dislike the design.", "They want lower prices.", "They visit mostly on Fridays."], 0, "Most of our customers visit the site on their phones.", D],
      ] },
    { lines: [
        ["W", "Hi, I reserved a compact car for three days under the name Helen Brooks."],
        ["M", "Yes, Ms. Brooks. Unfortunately, we don't have any compact cars left today. But I can give you a larger car for the same price."],
        ["W", "Oh, that's fine. Does it use a lot more gas, though?"],
        ["M", "Not much more. It's a hybrid, so it's actually quite fuel efficient."]],
      qs: [
        ["Where most likely is the conversation taking place?", ["At a car rental counter", "At a gas station", "At a car factory", "At a parking garage"], 0, "차를 예약해 두고 받으러 온 상황입니다.", S],
        ["What does the man offer the woman?", ["A larger car at no extra cost", "A discount on gas", "An extra day for free", "A ride to the airport"], 0, "a larger car for the same price.", D],
        ["What is the woman concerned about?", ["Fuel use", "The car's size", "The car's color", "The return time"], 0, "Does it use a lot more gas?", D],
      ] },
    { lines: [
        ["M", "Hi, Maria. Are you still organizing the park cleanup on Saturday?"],
        ["W", "Yes. We have about thirty volunteers so far. Would you like to join us?"],
        ["M", "I'd love to, but I have to work until noon on Saturday."],
        ["W", "No problem. We'll be there until four, so you can come in the afternoon."],
        ["M", "Great. Should I bring anything?"],
        ["W", "Just gloves. We'll provide trash bags and water."]],
      qs: [
        ["What is the woman organizing?", ["A park cleanup", "A sports event", "A fund-raiser", "A picnic"], 0, "the park cleanup on Saturday.", T],
        ["Why does the man say, \"I have to work until noon on Saturday\"?", ["He cannot come in the morning.", "He is refusing to help.", "He wants to change the date.", "He needs a ride."], 0, "오전에는 못 온다는 뜻이고, 여자가 오후에 오라고 답합니다.", I],
        ["What should the man bring?", ["Gloves", "Trash bags", "Water", "Lunch"], 0, "Just gloves. 쓰레기봉투와 물은 준비해 줍니다.", D],
      ] },
    { lines: [
        ["W", "Ahmed, are you going to the training session on the new accounting software?"],
        ["M", "I signed up for the one on Tuesday, but now I have a client meeting at that time."],
        ["W", "There's another session on Thursday morning. You could switch to that one."],
        ["M", "Good idea. Who should I contact about changing it?"],
        ["W", "Just e-mail Ms. Rivera in human resources."]],
      qs: [
        ["What is the training session about?", ["New accounting software", "Client management", "Workplace safety", "Company policies"], 0, "the training session on the new accounting software.", D],
        ["What problem does the man have?", ["He has a schedule conflict.", "He forgot his password.", "He did not register in time.", "His computer is broken."], 0, "같은 시간에 고객 회의가 있습니다.", D],
        ["What does the woman tell the man to do?", ["Contact the human resources department", "Cancel his client meeting", "Ask the client to reschedule", "Attend the session online"], 0, "e-mail Ms. Rivera in human resources.", N],
      ] },
    { lines: [
        ["M", "Hello, I'm calling about the two-bedroom apartment you advertised on Maple Street. Is it still available?"],
        ["W", "Yes, it is. The rent is twelve hundred dollars a month, and that includes water and heating."],
        ["M", "That sounds good. Is parking included?"],
        ["W", "There's a parking space behind the building, but it's an extra fifty dollars a month."],
        ["M", "OK. Could I come and see the apartment tomorrow evening?"],
        ["W", "Sure. How about six o'clock?"]],
      qs: [
        ["Why is the man calling?", ["To ask about an apartment", "To report a repair problem", "To pay his rent", "To cancel a lease"], 0, "광고한 아파트가 아직 있는지 묻습니다.", T],
        ["What does the woman say about parking?", ["It costs extra.", "It is free.", "It is not available.", "It is on the street."], 0, "an extra fifty dollars a month.", D],
        ["What will the man most likely do tomorrow?", ["View an apartment", "Sign a lease", "Pay a deposit", "Move in"], 0, "Could I come and see the apartment tomorrow evening?", F],
      ] },
    { lines: [
        ["W", "Hello, I checked out of room 512 this morning, and I think I left my phone charger in the room."],
        ["M", "Let me call housekeeping. Yes, they found a black charger. It's at the front desk now."],
        ["W", "Great. Unfortunately, I'm already at the airport. Could you mail it to me?"],
        ["M", "Of course. I just need your address. There will be a small shipping fee."]],
      qs: [
        ["What did the woman leave behind?", ["A phone charger", "A mobile phone", "A laptop", "A room key"], 0, "I left my phone charger in the room.", D],
        ["Where is the woman now?", ["At an airport", "In her hotel room", "At home", "At the front desk"], 0, "I'm already at the airport.", D],
        ["What will the woman have to pay for?", ["Shipping", "An extra night", "Room cleaning", "A new charger"], 0, "There will be a small shipping fee.", D],
      ] },
    { lines: [
        ["M", "Let's talk about the marketing budget for next year. Karen, what do you think?"],
        ["W", "I'd like to spend more on online ads. Our social media campaign brought in a lot of new customers this year."],
        ["M2", "I agree, but we also need money for the trade show in May. Last year, we got several big contracts there."],
        ["M", "OK. Let's increase the online budget by ten percent and keep the trade show budget the same."]],
      qs: [
        ["What are the speakers mainly discussing?", ["A marketing budget", "Hiring new staff", "A trade show location", "A customer complaint"], 0, "the marketing budget for next year.", T],
        ["According to the woman, what was successful this year?", ["A social media campaign", "A trade show", "A television ad", "A holiday sale"], 0, "Our social media campaign brought in a lot of new customers.", D],
        ["What is decided at the end of the conversation?", ["Online spending will increase.", "The trade show will be canceled.", "The budget will be cut.", "A new manager will be hired."], 0, "increase the online budget by ten percent.", D],
      ] },
    { lines: [
        ["W", "Hi, I'm looking for a book called Leading Small Teams. I couldn't find it on the shelf."],
        ["M", "Let me check our system. It looks like we sold the last copy yesterday. I can order one for you. It usually takes about three days."],
        ["W", "Hmm, I need it for a seminar on Monday."],
        ["M", "In that case, our Oakwood branch has two copies. I can ask them to hold one for you."],
        ["W", "That would be great. It's on my way home."]],
      qs: [
        ["Where does the man most likely work?", ["At a bookstore", "At a library", "At a printing company", "At a university"], 0, "책을 팔고(sold) 주문해 주는 곳입니다.", S],
        ["Why does the woman say, \"I need it for a seminar on Monday\"?", ["Ordering the book may take too long.", "She wants a discount.", "She is asking for a recommendation.", "She will lead the seminar."], 0, "3일 걸리는 주문으로는 늦을 수 있다는 뜻입니다. 그래서 남자가 다른 지점을 제안합니다.", I],
        ["What will the man most likely do next?", ["Contact another store", "Place an order", "Give the woman a refund", "Check a shelf"], 0, "I can ask them to hold one for you.", N],
      ] },
    { lines: [
        ["M", "Hi, I'm a teacher at Westfield High School. I'd like to arrange a tour of your factory for my students."],
        ["W", "We'd be happy to have you. How many students would be coming?"],
        ["M", "About twenty-five."],
        ["W", "Our tours can take up to twenty people at a time, so we'd need to split the class into two groups."],
        ["M", "That's fine. Is there a fee?"],
        ["W", "No, tours are free for schools."]],
      qs: [
        ["Who most likely is the man?", ["A teacher", "A factory worker", "A tour guide", "A student"], 0, "I'm a teacher at Westfield High School.", S],
        ["What does the woman say about the tours?", ["The group size is limited.", "They are offered only on weekends.", "They take three hours.", "They must be booked online."], 0, "up to twenty people at a time.", D],
        ["How much will the tour cost?", ["Nothing", "$20", "$25", "$5 per student"], 0, "tours are free for schools.", D],
      ] },
    { lines: [
        ["W", "Did you hear that Mr. Chen is retiring at the end of this month?"],
        ["M", "Yes. He's been with the company for over thirty years. We should do something special for him."],
        ["W", "I was thinking of a dinner at the Italian restaurant downtown. I'll ask everyone to contribute twenty dollars for a gift."],
        ["M", "Sounds good. I can make the reservation if you tell me how many people are coming."]],
      qs: [
        ["What are the speakers planning?", ["A retirement event", "A business trip", "A company anniversary", "A sales meeting"], 0, "은퇴하는 Mr. Chen을 위한 저녁 자리입니다.", T],
        ["What does the woman say she will do?", ["Collect money for a gift", "Make a reservation", "Choose a restaurant menu", "Call Mr. Chen"], 0, "I'll ask everyone to contribute twenty dollars for a gift.", N],
        ["What does the man offer to do?", ["Book a restaurant", "Buy the gift", "Give a speech", "Send invitations"], 0, "I can make the reservation.", N],
      ] },
    { lines: [
        ["M", "Hi, this is Jason from the third floor. Our Internet connection has been down since this morning."],
        ["W", "Yes, we've had several calls about that. The service provider is working on the problem."],
        ["M", "Do you know when it'll be fixed? I need to send some large files to a client today."],
        ["W", "They said it should be back by two o'clock. If it's urgent, you could use the Wi-Fi in the second-floor lounge. It's on a different network."]],
      qs: [
        ["What problem is the man reporting?", ["The Internet is not working.", "A file was deleted.", "A client has complained.", "The lounge is closed."], 0, "Our Internet connection has been down.", D],
        ["Why is the man concerned?", ["He must send files to a client.", "He has a meeting at two.", "He lost a client's contact details.", "He cannot print a report."], 0, "I need to send some large files to a client today.", D],
        ["What does the woman suggest?", ["Using a different network", "Calling the service provider", "Sending the files tomorrow", "Restarting his computer"], 0, "2층 라운지 와이파이는 다른 네트워크입니다.", N],
      ] },
    { lines: [
        ["W", "Hi, I bought this jacket here last week, but it's too small. Can I exchange it for a larger size?"],
        ["M", "Of course. Do you have your receipt?"],
        ["W", "Yes, here it is."],
        ["M", "Thank you. Hmm, we don't have a large in blue right now. We have it in black, or I can order a blue one for you."],
        ["W", "I'll just take the black one."]],
      qs: [
        ["Why does the woman want to exchange the jacket?", ["It is the wrong size.", "It is damaged.", "It is the wrong color.", "It was too expensive."], 0, "it's too small.", D],
        ["What does the man ask the woman for?", ["A receipt", "A credit card", "A phone number", "A membership card"], 0, "Do you have your receipt?", D],
        ["What will the woman most likely do?", ["Take a black jacket", "Order a blue jacket", "Get a refund", "Come back later"], 0, "I'll just take the black one.", F],
      ] },
    { lines: [
        ["M", "Hi, Carla. Have we hired a photographer for the product launch next month?"],
        ["W", "Not yet. I contacted two photographers, but they're both busy that day."],
        ["M", "My friend runs a photography studio. Her work is excellent, and her prices are reasonable."],
        ["W", "That would be helpful. Could you send me her contact information?"]],
      qs: [
        ["What event are the speakers preparing for?", ["A product launch", "A wedding", "A photo exhibition", "A staff party"], 0, "the product launch next month.", D],
        ["What problem does the woman mention?", ["Photographers are not available.", "The budget is too small.", "The event date has changed.", "The studio is too far away."], 0, "they're both busy that day.", D],
        ["What does the woman ask the man to do?", ["Send some contact information", "Call the photographer himself", "Find a new venue", "Lower the price"], 0, "Could you send me her contact information?", N],
      ] },
    { lines: [
        ["W", "Excuse me, I'd like a ticket on the next train to Boston."],
        ["M", "The next train leaves at ten fifteen, but it's sold out. The one after that leaves at eleven forty."],
        ["W", "Oh no. I have a meeting at two o'clock. What time does the eleven forty train arrive?"],
        ["M", "It arrives at one thirty."],
        ["W", "That's cutting it close, but I'll take it."]],
      qs: [
        ["Where most likely are the speakers?", ["At a train station", "At an airport", "At a bus stop", "At a travel agency"], 0, "다음 기차표를 사는 상황입니다.", S],
        ["What problem does the man mention?", ["A train is sold out.", "A train has been canceled.", "The ticket price has gone up.", "The station is closing."], 0, "it's sold out.", D],
        ["What does the woman mean when she says, \"That's cutting it close\"?", ["She will have very little extra time.", "She wants a cheaper ticket.", "She will miss her meeting.", "She needs to change seats."], 0, "1시 30분 도착, 2시 회의 → 시간이 빠듯하다는 뜻입니다.", I],
      ] },
    { lines: [
        ["W", "We need a new printer for the marketing team. The old one keeps breaking down."],
        ["M", "I found two models online. The first one is cheaper, but the second one prints much faster."],
        ["M2", "Since our team prints a lot of brochures, I think speed is more important."],
        ["W", "I agree. Let's order the faster one. Steve, can you check if it's in our budget?"],
        ["M", "Sure, I'll check with the finance department this afternoon."]],
      qs: [
        ["Why do the speakers need a new printer?", ["The old one keeps breaking down.", "The team has grown.", "The old one prints in black only.", "The lease has ended."], 0, "The old one keeps breaking down.", D],
        ["Why does one of the men prefer the faster printer?", ["The team prints many brochures.", "It is cheaper.", "It uses less ink.", "It is smaller."], 0, "our team prints a lot of brochures.", D],
        ["What will Steve do this afternoon?", ["Contact the finance department", "Order the printer", "Repair the old printer", "Print some brochures"], 0, "I'll check with the finance department this afternoon.", N],
      ] },
    { lines: [
        ["M", "Hello, this is Paul Novak. I have an appointment with Dr. Lee tomorrow at 9 A.M., but I need to change it."],
        ["W", "Sure, Mr. Novak. Would Thursday at the same time work?"],
        ["M", "I'm traveling on Thursday. Do you have anything on Friday?"],
        ["W", "Dr. Lee is available on Friday at 4 P.M."],
        ["M", "Perfect. I'll take that."]],
      qs: [
        ["Why is the man calling?", ["To reschedule an appointment", "To cancel a trip", "To ask about a bill", "To get test results"], 0, "I need to change it.", T],
        ["Why can't the man come on Thursday?", ["He will be traveling.", "He has to work late.", "The doctor is away.", "The office is closed."], 0, "I'm traveling on Thursday.", D],
        ["When will the man see Dr. Lee?", ["On Friday at 4 P.M.", "On Thursday at 9 A.M.", "Tomorrow at 9 A.M.", "On Friday at 9 A.M."], 0, "Friday at 4 P.M. → I'll take that.", D],
      ] },
    { lines: [
        ["W", "Have you heard when we're moving to the new office?"],
        ["M", "The manager said it'll be the second week of March. The movers are coming on Saturday the tenth."],
        ["W", "That's earlier than I expected. I haven't started packing yet."],
        ["M", "Don't worry. The company is giving everyone boxes next Monday, and we'll have Friday afternoon off to pack."]],
      qs: [
        ["What are the speakers discussing?", ["An office move", "A new manager", "A vacation schedule", "A shipping delay"], 0, "새 사무실로 이사 이야기입니다.", T],
        ["Why does the woman say, \"That's earlier than I expected\"?", ["She is not ready yet.", "She is pleased with the news.", "She wants to change the date.", "She will be on vacation."], 0, "아직 짐을 안 쌌다고 이어 말합니다.", I],
        ["What will employees receive next Monday?", ["Boxes", "A schedule", "New keys", "A day off"], 0, "giving everyone boxes next Monday. 쉬는 시간은 금요일 오후입니다.", D],
      ] },
    { lines: [
        ["M", "Hi, I'd like to order lunch for a meeting on Wednesday. There will be twelve people."],
        ["W", "Sure. We have sandwich platters and salad boxes. Do any of your guests have dietary needs?"],
        ["M", "Yes, three of them are vegetarian."],
        ["W", "No problem. I'll include vegetarian sandwiches. Would you like us to deliver it?"],
        ["M", "Yes, please. To the Lambert Building, fifth floor, by eleven forty-five."]],
      qs: [
        ["What is the man doing?", ["Ordering food for a meeting", "Booking a restaurant table", "Planning a party menu", "Complaining about an order"], 0, "회의용 점심을 주문합니다.", T],
        ["How many guests are vegetarian?", ["Three", "Five", "Eleven", "Twelve"], 0, "three of them are vegetarian. 12는 전체 인원입니다.", D],
        ["What does the man request?", ["That the food be delivered", "That the order be paid later", "That the salads be removed", "That the time be changed"], 0, "배달해 달라고 합니다.", N],
      ] },
    { lines: [
        ["W", "Congratulations, Ray! I heard you were promoted to regional sales manager."],
        ["M", "Thanks! I'm excited, but it means I'll be traveling a lot more."],
        ["W", "Will you have to move?"],
        ["M", "No, I'll still be based here, but I'll visit our five branch offices every month."]],
      qs: [
        ["Why does the woman congratulate the man?", ["He received a promotion.", "He won an award.", "He closed a big sale.", "He is moving to a new city."], 0, "you were promoted.", D],
        ["What does the man say about his new position?", ["It requires more travel.", "It pays less.", "It starts next year.", "It is in another city."], 0, "I'll be traveling a lot more. 이사는 안 합니다.", D],
        ["What will the man do every month?", ["Visit branch offices", "Write a sales report", "Train new employees", "Meet the CEO"], 0, "I'll visit our five branch offices every month.", D],
      ] },
    { lines: [
        ["M", "Hi, I'd like to borrow these books, but I think my library card has expired."],
        ["W", "Let me see. Yes, it expired last month. I can renew it for you now. It just takes a minute."],
        ["M", "Is there a fee?"],
        ["W", "No, renewal is free. But I'll need to confirm your address. Have you moved recently?"],
        ["M", "Yes, actually, I moved in January."],
        ["W", "Then please fill out this form with your new address."]],
      qs: [
        ["What problem does the man have?", ["His library card has expired.", "He lost a book.", "He owes a late fee.", "The library is closing."], 0, "my library card has expired.", D],
        ["How much does the renewal cost?", ["Nothing", "$1", "$5", "$10"], 0, "renewal is free.", D],
        ["What does the woman ask the man to do?", ["Fill out a form", "Show a photo ID", "Return some books", "Come back later"], 0, "please fill out this form.", N],
      ] },
    { lines: [
        ["W", "Robert, have you seen the results of our customer survey?"],
        ["M", "Yes. Most customers are happy with our products, but many said our delivery is too slow."],
        ["W", "That's what I was afraid of. What do you think we should do?"],
        ["M", "We could work with a second delivery company. That way, we could ship orders faster during busy periods."],
        ["W", "Let's discuss it at Monday's management meeting."]],
      qs: [
        ["What are the speakers discussing?", ["Survey results", "A product design", "Hiring new drivers", "A price increase"], 0, "고객 설문 결과 이야기입니다.", T],
        ["What did customers complain about?", ["Slow delivery", "Product quality", "High prices", "Rude staff"], 0, "our delivery is too slow.", D],
        ["What does the man suggest?", ["Using an additional delivery company", "Raising prices", "Hiring more staff", "Changing products"], 0, "work with a second delivery company.", N],
      ] },
  );
})();
