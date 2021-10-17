var rs = require("readline-sync")
const chalk = require("chalk")

let log = console.log

let blueBright = chalk.bold.blueBright
let green = chalk.bold.green
let red = chalk.bold.red
let cyan = chalk.bold.cyan
let yellow = chalk.bold.yellow
let title = chalk.black.bold.bgYellow
let inverse = chalk.inverse
let blue = chalk.blue

var score = 0;
var highscore = 15;

let que = [
  {
    no: '1',
    question: `Which private sector bank has launched WhatsApp Banking facility recently?`,
    A: 'RBL Bank',
    B: 'Yes Bank',
    C: 'Axis Bank',
    D: 'IDBI Bank',
    answer: 'C',
  },
  {
    no: '2',
    question: `Which company launched a WhatsApp API enabled chatbot called ‘Mitra’, to provide employment opportunities?`,
    A: 'Vahan',
    B: 'Mahindra',
    C: 'TCS',
    D:'Infosys',
    answer: 'A',
  },
  {
    no: '3',
    question: `Which Indian public sector bank has launched banking services through WhatsApp?`,
    A: 'Union Bank of India',
    B: 'Bank of Baroda',
    C: 'Bank of Maharashtra',
    D: 'Indian Bank',
    answer: 'B',
  },
  {
    no: '4',
    question: `Which Indian state/UT has launched an exclusive WhatsApp number to help women in distress?`,
    A: 'Assam',
    B: 'Goa',
    C: 'Kerala',
    D: 'Telangana',
    answer: 'B',
  },
  {
    no: '5',
    question: `After WhatsApp, which social media platform introduced disappearing feature of message?`,
    A: 'Facebook Messenger',
    B: 'Twitter',
    C: 'Snapchat',
    D: 'Telegram',
    answer: 'A',
  },
  {
    no: '6',
    question: `WhatsApp tried to sue NSO Group over the issue of ‘Pegasus’ recently. In this context, consider the following statements:
   Pegasus is a spyware.
It enables the hacking of phones only when the user attends calls through WhatsApp.
Select the correct option from the codes given below: `,
    A: 'Only 1 is correct',
    B: 'Only 2 is correct',
    C: 'Neither 1 nor 2 is correct',
    D: 'Both 1 and 2 are correct',
    answer: 'A',
  },
  {
    no: '7',
    question: `Which Indian private sector bank has recently rolled out banking services on WhatsApp amidst the nation-wide lock-down ?`,
    A: 'HDFC Bank',
    B: 'ICICI Bank',
    C: 'Axis Bank',
    D: 'Yes Bank',
    answer: 'B',
  },
  {
    no: '8',
    question: `AfNational Commission for Women (NCW) launches WhatsApp number to report cases of domestic violence. Where is the Headquarters of NCW located?`,
    A: 'Lucknow',
    B: 'New Delhi',
    C: 'Nagpur',
    D: 'Mumbai',
    answer: 'B',
  },
  {
    no: '9',
    question: `Pradhan Mantri Bharatiya Janaushadhi Kendras (PMBJK) has started to accept orders for medicines on WhatsApp. PMBJK functions under which Union Ministry?`,
    A: 'Ministry of Micro, Small and Medium Enterprises',
    B: 'Ministry of Consumer Affairs, Food and Public Distribution',
    C: 'Ministry of Chemicals and Fertilizers',
    D: 'Ministry of Health and Family Welfare',
    answer: 'C',
  },
  {
    no: '10',
    question: `Which is the first country, where WhatsApp is launching its ‘WhatsApp Pay’?`,
    A: 'India',
    B: 'Brazil',
    C: 'Japan',
    D: 'South Korea',
    answer: 'B',
  },
];

log(cyan("Welcome to the..."), title("WhatsApp Security ...\n"))
let user = rs.question("Please Enter Your Name : ")
log(yellow(`Hello ${user}`))

log(blueBright("\nA Quiz from WhatsApp Security ..."))
log("\nThere will be Ten(10) questions.....")
log(yellow("+5"), "Point For Correct Answer.....", green("-2"), "Point For Wrong Answer....\n")

for (q of que) {
  log(yellow(q.no + ': ' + q.question));
  log(cyan('A: ' + q.A));
  log(cyan('B: ' + q.B));
  log(cyan('C: ' + q.C));
  log(cyan('D: ' + q.D));

  //input answer
  var ans = rs.question('Answer : ');

  //compare answer
  if (ans.toLowerCase() === q.answer.toLowerCase()) {
    log(green("\n+5"), "Your Answer Is :- ", green("correct"), ".");
    score += 5;
    log("Your Current Score Is :-", green(score), "\n");
  } else {
    log(red("+2"), "Your answer Is :-", red("incorrect"), ".");
    score -= -2;
    log("Your Current Score Is :-", red(score), "\n");
  }
}


if (score > highscore) {
  log(green("Congratulation..!You Are Win....."))
} else {
  log(red("You Are Not Win The Quiz.....!\n"))
}

log(blue("Scoreboard :="))
log('Hello ' + green(user) + ' Your Final Resuly Is :- ' + score)