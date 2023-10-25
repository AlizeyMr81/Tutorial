// 1. Write a JS code to print numbers from 1 to 10

// for (let i = 1; i <= 10; i++) {
//   alert(i);
// }

// 2. Write a JS code to print a 2D array

// var arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]; //1, 2, 3, 4, 5, 6
// for (var i = 0; i < arr.length; i++) {
//   for (var j = 0; j < arr[0].length; j++) {
//     alert(arr[i][j]);
//   }
// }

//important 3. Write a JS code to print Even numbers in given array

// let arr = [];
// let userNumber = null;
// while (userNumber != 0) {
//   userNumber = +prompt("Enter your number");
//   if (userNumber != 0) {
//     arr.push(userNumber);
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     alert("Show your even number of array : " + "\n" + arr[i]);
//   } else {
//     alert("You did not add eny even numbers");
//     break;
//   }
// }

// 4. Write a JS code to delete all occurrence of element in given array

// let arr = [2, 12, 81, 96, 37, 2, 5, 9, 2, 16];
// function deleteElement(arr, element) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == element) {
//       arr.splice(i,1);
//     }
//   }
//   return arr;
// }
// alert(deleteElement(arr, 2));

//important 5. Write a JS code to find the power of a number using for loop

// let num = +prompt("Enter your number");
// let pow = +prompt("What is the power of your first number?");
// function numPower(num, pow) {
//   let result = 1;
//   for (let i = 0; i < pow; i++) {
//     result = result * num;
//   }
//   return result;
// }
// alert(numPower(num, pow));

// important 6. Write a JS code to print a pattern using for loop

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */
// let userNumber = +prompt("Enter your number to show pattern that");
// function showPattern(num) {
//   for (let i = 1; i <= num; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str = str + j + " ";
//     }
//     console.log(str);
//   }
// }
// showPattern(userNumber);

// important 7. Write a JS code to find the no of digits in a number

// let userNumber = +prompt("Enter your number to show digit that");
// let count = 0;
// while (userNumber != 0) {
//   userNumber = Math.trunc(userNumber / 10);
//   count++;
// }
// alert(count);

//important 8. Write a JS code to calculate the sum of digits in a number

// let userNumber = +prompt("Enter your number");
// let sum = 0;
// while (userNumber != 0) {
//   sum = sum + userNumber % 10;
//   userNumber = Math.trunc(userNumber / 10);
// }
// alert(sum);

//important 9. Write a JS code to find the largest number in an array

// let arr = [5, 8, 11, 1];
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   largest = arr[i] > largest ? arr[i] : largest;
// }
// alert(largest);

// 10. Write a JS code to find the number of zeros in 2D Matrix
// var arr = [
//   [0, 1, 1],
//   [0, 1, 0],
//   [1, 0, 0],
// ];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[0].length; j++) {
//     if (arr[i][j] == 0) {
//       count++;
//     }
//   }
// }
// alert(count);

//important 11. Write a JS code to find product of two arrays

// let arr1 = [1, 5, 41, 21, 6];
// let arr2 = [6, 12, 14, 2];
// function findProd(arr1, arr2) {
//   let result = arr1.length > arr2.length ? arr1 : arr2;
//   for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
//     result[i] = arr1[i] * arr2[i];
//   }
//   return result;
// }
// alert(findProd(arr1, arr2));

// important 12. Write a JS code to count all letters in a word

// let str = prompt("Write your world");
// let count = 0;
// str.toLocaleLowerCase();
// for (let i = 0; i < str.length; i++) {
//   count++;
// }
// alert(count);

// 13. Write a JS code to find duplicate values in a given array
// function findDup(arr) {
//   var arrDup = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) != i && arrDup.indexOf(arr[i]) == -1) {
//      alert(arrDup.push(arr[i]));
//     }
//   }
//   return arrDup;
// }
// var arr = [4, 2, 34, 4, 1, 12, 1, 4];

// alert(findDup(arr)); //[4, 1]

function countDown(fromNumber) {
  alert(fromNumber);
  if (fromNumber == 1) {
    return 0;
  }
  countDown(fromNumber - 1);
}
countDown(3);
