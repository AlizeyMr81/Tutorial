let mainAnswers = ["blue", "4", "4", "whale", "js"];
let userAnswers = [];
let scores = 0;
let questionTest = [
  "What color is the sky?",
  "How many seasons does Iran have?",
  "How much is 2 + 2 ?",
  "What is the largest animal in the world?",
  "What is the most important front-end programming language?",
];

for (let i = 0; i < questionTest.length; i++) {
  userAnswers.push(prompt(questionTest[i]));
  if (userAnswers[i] === mainAnswers[i]) {
    scores++;
  }
}
console.log("Total your scores :", scores);

//////////////////////////////////////////////////////////////////////

// let userAnswers = null;
// let scores = 0;
// let questionTest = [
//   { id: 1, title: "What color is the sky?", answer: "blue" },
//   { id: 1, title: "How many seasons does Iran have?", answer: "4" },
//   { id: 1, title: "How much is 2 + 2 ?", answer: "4" },
//   { id: 1, title: "What is the largest animal in the world?", answer: "whale" },
//   { id: 1, title: "What is the most important front-end programming language?", answer: "JavaScript" },
// ];

// questionTest.forEach(function (answer) {
//   userAnswers = prompt(answer.title);
//   if (userAnswers === answer.answer) {
//     scores++;
//   }
// });

// console.log("Total your scores :", scores);
