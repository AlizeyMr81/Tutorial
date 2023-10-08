// اعدادی را به تعداد دلخواه از کاربر گرفته و داخل آرایه ای ذخیره کنید
// و سپس میانگین آن ها را محاسبه کرده و نمایش دهید

let userNumber = null;
let arr = []; // [8, 6, 12, 5, 9 ]
let sum = 0;


while (userNumber != 0) {
  userNumber = +prompt(
    'Enter your number \n if you do not have any number press "Cancel" button :'
  );

  if (userNumber != 0) {
    arr.push(userNumber);
  }
}


console.log(arr);

for (let i = 0; i < arr.length; i++) {

  sum += arr[i];
}

console.log("Average :", sum / arr.length);

