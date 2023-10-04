// 1. عددی رو از کاربر گرفته و مجموع ارقام آن را حساب کنید

// 2. عددی را از کاربر گرفته و تعداد ارقام آن را نمایش دهید

// let userNumber = +prompt("Enter your number", 12);

// let sum = 0;

// while (userNumber > 0) {
//   sum += Math.trunc(userNumber % 10);

//   userNumber = Math.trunc(userNumber / 10);
// }

// alert(sum);

// ----------------------------------------------------- Seconde practice

let userNumber = +prompt("Enter your number", 12);

let count = 1;

while (Math.trunc(userNumber / 10) != 0) {
  userNumber = Math.trunc(userNumber / 10);
  count++;
}

alert("Number Of Digits : " + count);
