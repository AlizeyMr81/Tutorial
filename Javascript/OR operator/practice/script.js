/*
از کاربر سن و جنسیت را دریافت کنید.
در صورتی که جنسیت کاربر مونث بوده یا سن کمتر از 18 را دارد، به اون خطا نمایش داده
و در غیر این صورت به اون مجوز ورود به پنل را نمایش دهید.
*/

let userAge = prompt("Enter your age", 18);
let userGender = prompt("Enter your gender", "female or male");

if (userAge < 18 || userGender === "female") {
  alert("You cannot enter the site");
} else {
  alert("You can enter the site :)");
}
