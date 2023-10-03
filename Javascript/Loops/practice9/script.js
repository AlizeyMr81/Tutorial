// عددی را از کاربر دریافت کرده و سپس مجموع رقم های آن را محاسبه کنید.

// :به عنوان مثال برای عدد 142 به صورت زیر محاسبه می شود

// 1 + 4 + 2 = 7

let userNumber = +prompt("Enter your number");
let sum = 0;

for (; userNumber > 0; ) {
  sum += userNumber % 10;
  userNumber = Math.trunc(userNumber / 10);
}

alert(sum);


