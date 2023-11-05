// کلمه ای از کاربر دریافت کرده و چک کنید که کلمه وارد شده از هر دو سمت چپ و راست به یک صورت خوانده
// می شود یا خیر

// به عنوان مثل کلمه
// gig
// از هر دو طرف به یک صورت خوانده می شود

let userWord = prompt("Enter your word : ");
// userWord = userWord.toLowerCase();
// let changeStrToArr = userWord.split("");
// let reverseArr = userWord.split("");
// console.log(reverseArr.reverse());

// for (let i = 0; i < changeStrToArr.length; i++) {
//   if (changeStrToArr[i] === reverseArr[i]) {
//     alert("Your word entered can be read of both sides (Palindrome)");
//     break;
//   } else {
//     alert("Your word entered can not be read of both sides ( No Palindrome)");
//     break;
//   }
// }

let changeStrToArr = userWord.split("");
let reverseArr = changeStrToArr.reverse();
let changeArrToStr = reverseArr.join("");

if (userWord === changeArrToStr) {
  alert("Your word entered can be read of both sides (Palindrome)");
} else {
  alert("Your word entered can not be read of both sides ( No Palindrome)");
}
