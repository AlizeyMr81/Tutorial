// اعدادی را به تعداد دلخواه کاربر دریافت کنید و میانگین آن ها را محاسبه کرده و نمایش بدید

let userNumber = 0;
let sum = 0;
let counter = 0;

while (true) {
  userNumber = +prompt(
    "Enter as many numbers as you want and then press cancel to get their average "
  );
  sum += userNumber;
  if (userNumber === 0) {
    break;
  }
  counter++;
}

alert("Average : " + sum / counter);
