// یک پروژه ماشین حساب پیاده سازی کنید
// به این صورت که 2 عدد را همراه با عملیات لازم (ضرب، تقسیم و ...) از کاربر دریافت کرده و عملیات دلخواه کاربر را روی اعداد ورودی اعمال کنید و حاصل را نمایش دهید

let num1 = +prompt("Enter first your number");
let num2 = +prompt("Enter seconde your number");
let operation = prompt(
  "Write your operation : \n 1./\n 2.*\n 3.-\n 4.**\n 5.+"
);
let userOperation = null;

// if (operation === "1") {
//   userOperation = num1 / num2;
// } else if (operation === "2") {
//   userOperation = num1 * num2;
// } else if (operation === "3") {
//   userOperation = num1 - num2;
// } else if (operation === "4") {
//   userOperation = num1 ** num2;
// } else if (operation === "5") {
//   userOperation = num1 + num2;
// } else {
//   alert("Choose correct option");
// }

// alert(userOperation);

switch (operation) {
  case "1":
    alert((userOperation = num1 / num2));
    break;
  case "2":
    alert((userOperation = num1 * num2));
    break;
  case "3":
    alert((userOperation = num1 - num2));
    break;
  case "4":
    alert((userOperation = num1 ** num2));
    break;
  case "5":
    alert((userOperation = num1 + num2));
    break;
  default:
    alert("Choose correct option");
}

