// 1개월 치 추가 독해 지문 (7~30번)
(() => {
  const T = "주제·목적", D = "세부 사항", X = "NOT 문제", I = "의도 파악", F = "추론", V = "동의어";
  PART7.push(
    {
      title: "Memo",
      text: "To: All employees\nFrom: Sandra Ortiz, Office Manager\nDate: March 3\n\nStarting next Monday, we will begin a new recycling program. Blue bins for paper will be placed next to every printer, and green bins for plastic bottles will be placed in each kitchen. Please do not put food waste in either bin. The cleaning staff will empty the bins every Wednesday and Friday. If you have questions, contact me at extension 214.",
      qs: [
        ["What is the purpose of the memo?", ["To introduce a new program", "To announce a change of cleaning company", "To ask for volunteers", "To report a problem with the printers"], 0, "새 재활용 프로그램 시작을 알리는 메모입니다.", T],
        ["Where will the green bins be placed?", ["In each kitchen", "Next to every printer", "In the main lobby", "Outside the building"], 0, "green bins ... will be placed in each kitchen. 프린터 옆은 파란 통입니다.", D],
        ["How often will the bins be emptied?", ["Twice a week", "Every day", "Once a week", "Once a month"], 0, "수요일과 금요일, 즉 일주일에 두 번입니다.", D],
      ],
    },
    {
      title: "E-mail",
      text: "To: Daniel Moss\nFrom: Customer Service, Pine & Oak Furniture\nSubject: Your order #4471\n\nDear Mr. Moss,\n\nThank you for your order of one oak dining table and four chairs. Unfortunately, the chairs are currently out of stock. The table will be delivered on April 12 as planned, but the chairs will not be available until early May. If you prefer, we can hold the entire order and deliver everything together. Please reply to this e-mail to let us know which option you would like.\n\nSincerely,\nAmy Chen",
      qs: [
        ["Why was the e-mail sent?", ["To report a problem with an order", "To confirm a payment", "To advertise a sale", "To request a product review"], 0, "의자 재고가 없다는 문제를 알리는 메일입니다.", T],
        ["What is Mr. Moss asked to do?", ["Choose a delivery option", "Pay an extra fee", "Visit the store", "Cancel his order"], 0, "let us know which option you would like.", D],
        ["What is suggested about the chairs?", ["They may arrive later than the table.", "They are made of pine.", "They are being sold at a discount.", "They have been discontinued."], 0, "탁자는 4월 12일, 의자는 5월 초에나 가능합니다.", F],
      ],
    },
    {
      title: "Notice",
      text: "Fitwell Gym — Membership Update\n\nBeginning July 1, monthly membership fees will increase from $40 to $45. This change will allow us to replace older equipment and extend our weekend hours. Members who pay for a full year in advance before June 30 will keep the current rate for the next twelve months. Please speak with a staff member at the front desk for details.",
      qs: [
        ["What will happen on July 1?", ["Membership fees will go up.", "The gym will close for repairs.", "A new location will open.", "Weekend hours will be reduced."], 0, "monthly membership fees will increase.", D],
        ["According to the notice, why is the change being made?", ["To pay for new equipment and longer hours", "To raise staff salaries", "To build a swimming pool", "To cover higher taxes"], 0, "replace older equipment and extend our weekend hours.", D],
        ["How can members keep the current rate?", ["By paying for a year in advance before June 30", "By referring a friend", "By exercising on weekends", "By signing up online"], 0, "pay for a full year in advance before June 30.", D],
      ],
    },
    {
      title: "Text-message chain",
      text: "Paul Kim (2:15 P.M.)\nAre you still at the print shop?\n\nLisa Grant (2:16 P.M.)\nYes, I'm waiting for the banners for tomorrow's trade show.\n\nPaul Kim (2:17 P.M.)\nCould you also pick up 200 business cards? I ordered them last week.\n\nLisa Grant (2:18 P.M.)\nNo problem. Are they under your name?\n\nPaul Kim (2:19 P.M.)\nYes. Thanks a lot!",
      qs: [
        ["Why is Ms. Grant at the print shop?", ["To pick up some banners", "To order business cards", "To repair a printer", "To meet a client"], 0, "I'm waiting for the banners.", D],
        ["At 2:18 P.M., what does Ms. Grant mean when she writes, \"No problem\"?", ["She will collect the business cards.", "The banners are finished.", "The trade show has been canceled.", "She does not need any help."], 0, "명함도 찾아 달라는 부탁을 들어주겠다는 뜻입니다.", I],
        ["What will most likely happen tomorrow?", ["A trade show will take place.", "A new print shop will open.", "Mr. Kim will order more cards.", "Ms. Grant will start a new job."], 0, "tomorrow's trade show.", F],
      ],
    },
    {
      title: "Article",
      text: "Lakeview to Launch Bike-Sharing Program\n\nThe city of Lakeview will launch a bike-sharing program on June 1. Residents and visitors will be able to rent bicycles from 30 stations around the city using a mobile app. The first 30 minutes of each ride will be free, and each additional 30 minutes will cost $1. City officials hope the program will reduce traffic in the downtown area. If it is successful, 20 more stations will be added next year.",
      qs: [
        ["What is the article mainly about?", ["A new transportation service", "A road construction project", "A bicycle race", "A new mobile phone"], 0, "자전거 공유 서비스 시작 소식입니다.", T],
        ["How much will a 60-minute ride cost?", ["$1", "Nothing", "$2", "$3"], 0, "처음 30분 무료 + 다음 30분 $1 = $1.", F],
        ["What is indicated about the program?", ["It may be expanded.", "It is only for residents.", "It requires a membership card.", "It operates only downtown."], 0, "성공하면 내년에 20곳을 더 늘립니다. 방문객도 쓸 수 있고, 앱으로 빌립니다.", F],
      ],
    },
    {
      title: "Job advertisement",
      text: "Sous Chef Wanted\n\nHarbor Grill, a seafood restaurant in Port Ellis, is looking for an experienced sous chef. The successful candidate will help plan menus, train kitchen staff, and manage food orders. At least three years of experience in a professional kitchen is required. Weekend and evening work is necessary. We offer competitive pay and free meals during shifts. To apply, visit our restaurant with your résumé between 2 and 4 P.M., Monday to Thursday.",
      qs: [
        ["What is NOT mentioned as a duty of the position?", ["Serving customers", "Planning menus", "Training kitchen staff", "Managing food orders"], 0, "손님 서빙은 업무 목록에 없습니다.", X],
        ["How should applicants apply?", ["By visiting the restaurant in person", "By sending an e-mail", "By calling the manager", "By filling out an online form"], 0, "visit our restaurant with your résumé.", D],
        ["The word \"successful\" in the advertisement is closest in meaning to", ["chosen", "wealthy", "famous", "finished"], 0, "successful candidate = 뽑힌 지원자.", V],
      ],
    },
    {
      title: "Letter",
      text: "Dear Dr. Evans,\n\nOn behalf of the Riverside Business Association, I would like to thank you for speaking at our monthly luncheon on October 8. Your talk on managing remote teams was very well received, and many members have asked whether you could return next year. I have enclosed a small gift as a token of our appreciation. We hope to work with you again soon.\n\nBest regards,\nKaren Lowe\nEvents Coordinator",
      qs: [
        ["Why did Ms. Lowe write the letter?", ["To thank a speaker", "To invite someone to join an association", "To confirm a reservation", "To request a payment"], 0, "강연에 대한 감사 편지입니다.", T],
        ["What did Dr. Evans talk about?", ["Managing remote teams", "Planning a luncheon", "Starting a business", "Hiring new members"], 0, "Your talk on managing remote teams.", D],
        ["What was sent with the letter?", ["A gift", "A check", "A membership card", "An event schedule"], 0, "I have enclosed a small gift.", D],
      ],
    },
    {
      title: "Notice",
      text: "Notice to Residents of Maple Court Apartments\n\nWater service will be shut off on Thursday, August 14, from 9 A.M. to 1 P.M. while workers repair a pipe in the basement. Residents are advised to store water in advance for drinking and cooking. We apologize for the inconvenience and thank you for your patience.\n\n— Building Management",
      qs: [
        ["Why will the water be shut off?", ["A pipe needs to be repaired.", "The building is being painted.", "New meters are being installed.", "The water bill was not paid."], 0, "while workers repair a pipe.", D],
        ["What are residents advised to do?", ["Store water ahead of time", "Leave the building", "Contact a plumber", "Turn off their heaters"], 0, "store water in advance.", D],
        ["For how long will water be unavailable?", ["Four hours", "Two hours", "Five hours", "All day"], 0, "오전 9시부터 오후 1시까지, 4시간입니다.", D],
      ],
    },
    {
      title: "E-mail",
      text: "From: Hiro Tanaka\nTo: Sales Team\nSubject: Thursday's meeting\n\nHi everyone,\n\nThursday's sales meeting will start at 10 A.M. instead of 9 A.M. because our regional director, Ms. Alvarez, will be joining us by video from Madrid. Please bring your quarterly sales numbers, as she would like to hear a short update from each of you. Each update should be no longer than five minutes.\n\nThanks,\nHiro",
      qs: [
        ["Why was the meeting time changed?", ["So that a director can participate", "Because the room is unavailable", "Because Mr. Tanaka is traveling", "Because the sales numbers are not ready"], 0, "지역 이사가 화상으로 참석하기 때문입니다.", D],
        ["What should team members prepare?", ["A short sales update", "A written report", "A product demonstration", "A travel plan"], 0, "a short update from each of you.", D],
        ["What is suggested about Ms. Alvarez?", ["She is not in the same city as the team.", "She will retire soon.", "She recently joined the company.", "She will speak for an hour."], 0, "마드리드에서 화상으로 참여합니다.", F],
      ],
    },
    {
      title: "Advertisement",
      text: "Speak with Confidence at Global Talk Language Academy\n\nWhether you need English for business or travel, our certified teachers can help. Choose from small group classes (maximum six students) or private lessons. Classes are offered in the morning, in the evening, and on Saturdays. Sign up before September 15 and get your first week free! Visit our website to see our full schedule.",
      qs: [
        ["What is mentioned about group classes?", ["They have no more than six students.", "They are held only on Saturdays.", "They are taught online.", "They are for beginners only."], 0, "maximum six students.", D],
        ["What is offered to people who sign up before September 15?", ["A free week of classes", "A free textbook", "A discount on private lessons", "A free placement test"], 0, "get your first week free.", D],
        ["What is NOT mentioned in the advertisement?", ["The price of classes", "The times classes are offered", "The size of group classes", "The teachers' qualifications"], 0, "수업 시간·인원·강사 자격(certified)은 나오지만 가격은 없습니다.", X],
      ],
    },
    {
      title: "Online review",
      text: "★★★★☆ Reviewed by Mia R.\n\nI stayed at the Seaside Inn for three nights last month. The room was clean and the ocean view was beautiful. The staff at the front desk were friendly and helped me book a boat tour. My only complaint is that the Wi-Fi was very slow, which made it hard to work. Still, I would stay here again.",
      qs: [
        ["What did the reviewer like about the inn?", ["The view", "The Wi-Fi", "The restaurant", "The swimming pool"], 0, "the ocean view was beautiful.", D],
        ["What problem did the reviewer mention?", ["The Internet was slow.", "The room was dirty.", "The staff were rude.", "The boat tour was canceled."], 0, "the Wi-Fi was very slow.", D],
        ["What can be inferred about the reviewer?", ["The reviewer did some work during the stay.", "The reviewer will not return to the inn.", "The reviewer works at the inn.", "The reviewer stayed for one night."], 0, "Wi-Fi가 느려서 일하기 어려웠다 → 숙박 중 일을 했습니다. 다시 묵겠다고 했으니 (B)는 오답.", F],
      ],
    },
    {
      title: "Memo",
      text: "To: All Staff\nFrom: Accounting Department\nRe: New expense reporting system\n\nStarting May 1, all expense reports must be submitted through ExpenseNow, our new online system. Paper forms will no longer be accepted. Training sessions will be held on April 24 and April 26 in Room 301. Each session lasts one hour. Staff who cannot attend either session can watch a recorded video on the company intranet.",
      qs: [
        ["What is the memo mainly about?", ["A change in how expenses are reported", "A new travel policy", "A move to a new office", "A change in salary payments"], 0, "경비 보고 방식이 온라인으로 바뀐다는 내용입니다.", T],
        ["What will happen on May 1?", ["Paper forms will no longer be accepted.", "A training session will be held.", "Room 301 will be renovated.", "A video will be recorded."], 0, "Starting May 1 ... Paper forms will no longer be accepted.", D],
        ["What can staff who miss the training do?", ["Watch a recorded video", "Attend a session in May", "Ask the accounting department for a manual", "Submit paper forms"], 0, "watch a recorded video on the company intranet.", D],
      ],
    },
    {
      title: "Text-message chain",
      text: "Rachel Lee (9:40 A.M.)\nThe projector in Room B isn't turning on. My presentation starts at 10.\n\nTom Baker (9:41 A.M.)\nI'll send someone from IT right away.\n\nRachel Lee (9:50 A.M.)\nStill nobody here.\n\nTom Baker (9:51 A.M.)\nSorry about that. Room D is free, and its projector works. Why don't you move there?\n\nRachel Lee (9:52 A.M.)\nGood idea. I'll let the attendees know.",
      qs: [
        ["What problem does Ms. Lee have?", ["A piece of equipment is not working.", "Her presentation file is missing.", "Room B is double-booked.", "Her presentation has been canceled."], 0, "The projector ... isn't turning on.", D],
        ["At 9:50 A.M., what does Ms. Lee mean when she writes, \"Still nobody here\"?", ["An IT worker has not arrived yet.", "The attendees have not arrived yet.", "Room B is ready for her presentation.", "She cannot find Mr. Baker."], 0, "바로 앞의 'IT 직원을 보내겠다'에 대한 답입니다. 이어서 Mr. Baker가 사과합니다.", I],
        ["What will Ms. Lee most likely do next?", ["Tell the attendees about a room change", "Call the IT department again", "Postpone her presentation", "Fix the projector herself"], 0, "I'll let the attendees know.", F],
      ],
    },
    {
      title: "Article",
      text: "Brightway Logistics Wins Green Business Award\n\nBrightway Logistics received this year's Green Business Award from the Eastport Chamber of Commerce. Over the past two years, the company has replaced half of its delivery trucks with electric vehicles and installed solar panels on its main warehouse. According to CEO Laura Kent, these changes have reduced the company's fuel costs by 30 percent. Brightway plans to switch the rest of its trucks to electric models by 2028.",
      qs: [
        ["Why did Brightway Logistics receive an award?", ["For environmentally friendly practices", "For fast delivery times", "For its customer service", "For creating many jobs"], 0, "전기 트럭·태양광 → Green Business Award.", D],
        ["What has happened to the company's fuel costs?", ["They have decreased by 30 percent.", "They have increased by 30 percent.", "They have stayed the same.", "They have been cut in half."], 0, "reduced the company's fuel costs by 30 percent. '절반'은 트럭 숫자 함정.", D],
        ["What does Brightway plan to do by 2028?", ["Use only electric trucks", "Open a new warehouse", "Buy another company", "Double the size of its fleet"], 0, "나머지 트럭도 전부 전기로 바꿉니다.", F],
      ],
    },
    {
      title: "Registration confirmation",
      text: "Registration Confirmation\n\nEvent: Small Business Marketing Workshop\nDate: Saturday, November 9\nTime: 10:00 A.M. – 3:00 P.M.\nLocation: Hartwell Community Center, Room 2\nFee paid: $35 (includes lunch)\n\nPlease arrive 15 minutes early to pick up your name tag. Parking is free in the lot behind the building. Cancellations made at least 48 hours before the event will receive a full refund.",
      qs: [
        ["What is included in the fee?", ["Lunch", "Parking", "A textbook", "A certificate"], 0, "$35 (includes lunch). 주차는 원래 무료입니다.", D],
        ["What are participants asked to do?", ["Arrive early", "Bring a laptop", "Pay for parking", "Bring their own name tag"], 0, "arrive 15 minutes early.", D],
        ["By when must participants cancel to receive a full refund?", ["By Thursday, November 7", "By Friday, November 8", "By Saturday, November 9", "By Sunday, November 10"], 0, "토요일 오전 10시의 48시간 전 → 목요일 11월 7일.", F],
      ],
    },
    {
      title: "E-mail",
      text: "Dear Ms. Navarro,\n\nThank you for applying for the graphic designer position at Clearview Media. We were impressed with your portfolio and would like to invite you for an interview on Tuesday, June 3, at 11 A.M. The interview will last about one hour and will include a short design task. Please bring a laptop with your design software installed. Kindly confirm your attendance by replying to this e-mail by May 30.\n\nRegards,\nOwen Price\nHuman Resources",
      qs: [
        ["What is the purpose of the e-mail?", ["To arrange a job interview", "To offer a job", "To reject an application", "To request a portfolio"], 0, "면접에 초대하는 메일입니다.", T],
        ["What is Ms. Navarro asked to bring?", ["A laptop", "Her résumé", "A reference letter", "Printed designs"], 0, "Please bring a laptop.", D],
        ["The word \"task\" in the e-mail is closest in meaning to", ["assignment", "tool", "question", "result"], 0, "task = 과제(assignment).", V],
      ],
    },
    {
      title: "Notice",
      text: "Now Available at Greenville Library: Laptop Lending\n\nLibrary members can now borrow laptops for use inside the library. Laptops may be borrowed for up to three hours at a time and must be returned to the information desk before the library closes. A valid library card is required. Laptops cannot be reserved in advance; they are lent on a first-come, first-served basis.",
      qs: [
        ["What is the notice mainly about?", ["A new library service", "New library hours", "A book sale", "A computer class"], 0, "노트북 대여라는 새 서비스 안내입니다.", T],
        ["What is required to borrow a laptop?", ["A library card", "A deposit", "A reservation", "A photo ID"], 0, "A valid library card is required.", D],
        ["What is true about the laptops?", ["They must be used inside the library.", "They can be reserved online.", "They can be borrowed for a full day.", "They are available for purchase."], 0, "for use inside the library. 예약 불가, 최대 3시간.", D],
      ],
    },
    {
      title: "Article",
      text: "Local Bakery Opens Second Location\n\nSweet Crumb Bakery, known for its fresh bread and pastries, opened its second shop on Hill Street last Saturday. Owner Grace Yoon started the business eight years ago in a small space on River Road. The new shop is twice as large as the original and includes a seating area for 40 customers. \"Many of our regular customers asked for a place to sit and enjoy their coffee,\" Ms. Yoon said.",
      qs: [
        ["What is the article mainly about?", ["A business expansion", "A new type of bread", "A cooking contest", "A change of owner"], 0, "두 번째 매장 개점 소식입니다.", T],
        ["When was Sweet Crumb Bakery founded?", ["Eight years ago", "Last Saturday", "Two years ago", "Forty years ago"], 0, "started the business eight years ago.", D],
        ["Why did the owner add a seating area?", ["Customers asked for one.", "The new space was too large.", "The city required it.", "Coffee sales were falling."], 0, "Many of our regular customers asked for a place to sit.", D],
      ],
    },
    {
      title: "Memo",
      text: "To: All Employees\nFrom: Human Resources\n\nThe office will be closed from December 24 through January 1 for the year-end holidays. Employees who need to work during this period must get approval from their manager by December 10. The building will be locked, so please contact security in advance if you need access. Normal operations will resume on January 2.",
      qs: [
        ["When will the office reopen?", ["January 2", "January 1", "December 24", "December 10"], 0, "Normal operations will resume on January 2.", D],
        ["What must employees who want to work during the closure do?", ["Get approval from a manager", "Work from home", "Sign up with human resources", "Change their vacation dates"], 0, "must get approval from their manager.", D],
        ["The word \"resume\" in the memo is closest in meaning to", ["restart", "summarize", "reduce", "review"], 0, "resume = 재개하다(restart). 이력서 résumé와 다릅니다.", V],
      ],
    },
    {
      title: "Text-message chain",
      text: "Kevin Ross (4:30 P.M.)\nThe caterer just called. They can't deliver the sandwiches for tomorrow's training until 12:30.\n\nAnna Pike (4:32 P.M.)\nThat's a problem. Lunch is scheduled for noon.\n\nKevin Ross (4:33 P.M.)\nShould I look for another caterer?\n\nAnna Pike (4:35 P.M.)\nIt's too late for that. Let's just move lunch back half an hour and end the morning session later.",
      qs: [
        ["What problem is being discussed?", ["A food delivery will be late.", "A trainer has canceled.", "A room is not available.", "The sandwiches cost too much."], 0, "샌드위치 배달이 12시 30분으로 늦어집니다.", D],
        ["At 4:35 P.M., what does Ms. Pike mean when she writes, \"It's too late for that\"?", ["There is not enough time to find a new caterer.", "The training has already ended.", "Lunch has been canceled.", "The caterer's office is closed."], 0, "다른 업체를 구하기엔 늦었다는 뜻입니다.", I],
        ["What will most likely happen tomorrow?", ["Lunch will start at 12:30.", "The training will be postponed.", "A new caterer will deliver food.", "The morning session will be shortened."], 0, "점심을 30분 미루고 오전 세션을 늘립니다.", F],
      ],
    },
    {
      title: "Advertisement",
      text: "Need help moving? Call SwiftMove!\n\nSwiftMove has helped families and businesses in the Kingsford area move for over 15 years. Our trained crews will pack, load, and deliver your belongings safely. We also offer short-term storage. Book a move on a weekday and save 10 percent. Free estimates are available by phone or online.",
      qs: [
        ["What service is NOT mentioned?", ["Cleaning", "Packing", "Storage", "Delivery"], 0, "포장·운반·보관은 나오지만 청소는 없습니다.", X],
        ["How can customers save money?", ["By moving on a weekday", "By booking online", "By packing their own boxes", "By paying in cash"], 0, "Book a move on a weekday and save 10 percent.", D],
      ],
    },
    {
      title: "E-mail",
      text: "Dear Mr. Lim,\n\nI am writing to inform you that, due to the rising cost of raw materials, the price of our standard cardboard boxes will increase by 8 percent starting October 1. However, as a long-time customer, you can lock in the current price for any orders placed before September 20. Please contact me if you would like to place an order or discuss your options.\n\nSincerely,\nNina Petrova\nAccount Manager, BoxCo Packaging",
      qs: [
        ["Why will the price increase?", ["Material costs have gone up.", "Shipping fees have risen.", "The boxes have a new design.", "Demand has increased."], 0, "due to the rising cost of raw materials.", D],
        ["What is suggested about Mr. Lim?", ["He has been a customer for a long time.", "He recently opened a business.", "He works for BoxCo Packaging.", "He has already placed an order."], 0, "as a long-time customer.", F],
        ["What can Mr. Lim do before September 20?", ["Order at the current price", "Return unused boxes", "Get free shipping", "Cancel his contract"], 0, "lock in the current price for any orders placed before September 20.", D],
      ],
    },
    {
      title: "Notice",
      text: "Welcome to the Harmon Art Museum\n\nAudio guides are available in six languages at the ticket counter for $5. Guides are free for museum members. Photography is permitted in all galleries except the special exhibition on the second floor. Please leave large bags in the lockers near the entrance. The museum café on the first floor is open until 5 P.M.",
      qs: [
        ["Who can use the audio guides for free?", ["Museum members", "Students", "Children", "Groups"], 0, "Guides are free for museum members.", D],
        ["Where is photography NOT allowed?", ["In the special exhibition", "In the first-floor galleries", "In the third-floor galleries", "In the permanent collection"], 0, "all galleries except the special exhibition. 나머지 전시실은 촬영 가능합니다.", D],
        ["What is NOT mentioned in the notice?", ["The museum's closing time", "The price of audio guides", "The location of the lockers", "The location of the café"], 0, "카페 영업시간(5시)은 있지만 박물관 폐관 시각은 없습니다.", X],
      ],
    },
    {
      title: "Article",
      text: "Main Street Repairs to Begin Next Week\n\nRepairs on Main Street between First Avenue and Fifth Avenue will begin on Monday and are expected to take about six weeks. During construction, the road will be reduced to one lane in each direction. Drivers are advised to use Park Avenue instead. Shops along Main Street will remain open, and pedestrians will still be able to use the sidewalks.",
      qs: [
        ["How long are the repairs expected to take?", ["About six weeks", "About one week", "About five weeks", "About six months"], 0, "about six weeks.", D],
        ["What are drivers advised to do?", ["Use a different road", "Drive only at night", "Park on First Avenue", "Take public transportation"], 0, "use Park Avenue instead.", D],
        ["What is indicated about the shops on Main Street?", ["They will stay open.", "They will close for six weeks.", "They will move to Park Avenue.", "They will offer discounts."], 0, "Shops along Main Street will remain open.", D],
      ],
    },
  );
})();
