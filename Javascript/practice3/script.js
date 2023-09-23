// سن کاربر را دریافت کنید.
// گر سن کاربر کمتر از 18 بود، به او پیغام "شما مجاز به ورود نیستید" را نمایش بدهید و در غیر این صورت پیغام "ورود به پنل" را نمایش بدهید.

let userAge = +prompt("Enter your age", "");

let allowAge =
  userAge < 18 ? "You can not enter the site" : "You can enter the site";
alert(allowAge);
