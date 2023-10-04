// 1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید

// 2. عددی را از کاربر گرفته و تعداد ارقام آن را نمایش دهید

let userNumber = +prompt("Enter your number", 12);
let sum = 0;
let count = 0;

if (userNumber == 0) {
  count = 1;
} else {
  while (userNumber / 10 > 0) {
    sum += Math.trunc(userNumber % 10);
    userNumber = Math.trunc(userNumber / 10);
    count++;
  }
}
alert("Sum Of Digits : " + sum + "\n\n" + "Count Of Digits : " + count);
