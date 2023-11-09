// Task 1 :
// let array = [2, 5, 8, 9, 10, 4];

// function doubleValues(receiveArr) {
//   let powerArr = [];
//   receiveArr.forEach(function (items) {
//     powerArr.push(items * 2);
//   });
//   console.log(powerArr);
// }
// console.log(array);
// doubleValues(array);
//==================================================
// Task 2 :
// let arrNumber = [5, 10, 16, 8, 7, 9, 11];

// function onlyEvenValues(arr) {
//   //   let evenNumbers = [];
//   //   arr.forEach(function (numbers) {
//   //     if (numbers % 2 === 0) {
//   //       evenNumbers.push(numbers); //add even number
//   //     }
//   //   });
//   //   console.log(evenNumbers);
//   //------------------------------------------
//   // USE filter() :

//   let evenNumbers = arr.filter(function (numbers) {
//     return numbers % 2 === 0;
//   });
//   console.log(evenNumbers);
//   // The standard way
// }

// console.log(arrNumber);
// onlyEvenValues(arrNumber);
//==============================================================

// task 3 :

// let arrStr = ["Alireza", "Hi", "Smit", "John"]; // Aa,Hi,St,Jn

// function showFirstAndLast(Array) {
//   //   let FirstAndLastLetter = [];
//   //   Array.forEach(function (str) {
//   //     FirstAndLastLetter.push(str[0] + str[str.length - 1]);
//   //   });
//   //   console.log(FirstAndLastLetter);
// //--------------------------------------------------------------------
//   let FirstAndLastLetter = Array.map(function (str) {
//     return str[0] + str[str.length - 1];
//   });
//   console.log(FirstAndLastLetter);
// }

// console.log(arrStr);
// showFirstAndLast(arrStr);
//=======================================================

// Task 4 :

// let usersInfo = [
//   { id: 1, name: "Eli" },
//   { id: 2, name: "John" },
//   { id: 3, name: "Alireza" },
//   { id: 4, name: "Smit" },
//   { id: 5, name: "Arnold" },
// ]; // add title:"teacher"

// function addKeyAndValue(users) {
//   users.forEach(function (items) {
//     items.title = "teacher";
//   });
// }
// addKeyAndValue(usersInfo);

//===============================================================

// Task 5 :
let str = "alireza";

function vowelCount(str) {
  let splitArr = str.toLowerCase().split(""); //["a","l","i","r","e","z","a"]
  let obj = {};
  let vowels = "aeiou";

  splitArr.forEach(function (letter) {
    if (vowels.indexOf(letter) !== -1) {
      if (obj[letter]) {
        obj[letter]++;
      } else {
        obj[letter] = 1;
      }
    }
  });
  console.log(obj);
}

vowelCount(str);
