// دو عدد رو از کاربر بگیرین و اعداد زوج بین آن ها را نمایش دهید

let firstNumber = +prompt("Enter your Number ");
let secondNumber = +prompt("Enter your Number ");

while (firstNumber < secondNumber) {
  if (firstNumber % 2 === 0) {
   console.log(firstNumber);
  }

  firstNumber++;
}
