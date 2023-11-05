// عددی را از کاربر دریافت کرده و سپس تعداد رقم های آن را نمایش دهید.

// به عنوان مثال برای عدد 142 عدد 3 به عنوان خروجی نمایش داده می شود. چون عدد 143 از 3 رقم تشکیل شده است.

let userNumber = +prompt("Enter your number", 12);

let count = 1;

if (isNaN(userNumber)) {

  alert("You cannot enter the site");

} else {
  
  for (; Math.trunc(userNumber / 10) != 0; count++) {
    userNumber = Math.trunc(userNumber / 10);
  }

  alert("Number Of Digits = " + count);
}