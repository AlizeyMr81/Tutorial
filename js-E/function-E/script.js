// 1. Write a JavaScript function to print the “Hello World” message

// function sayHello() {
//   alert("Hello World");
// }
// sayHello();

// 2. Write a function that returns the square of a number

// let userNumber = +prompt("Enter your number to show its square");
// function findSquare(num) {
//   return num ** 2;
// }
// alert(findSquare(userNumber));

// 3. Write a function to convert Celsius to Fahrenheit

// function calFahrenheit(cel) {
//   return cel * 9.5 + 32;
// }
// alert(calFahrenheit(+prompt("Enter your Celsius to show Fahrenheit")));

// 4. Write a function to find the area of a given Rectangle

// let width = +prompt("Enter your width");
// let height = +prompt("Enter your height");
// function rectangleArea(width, height) {
//     return height * width;
// }
// alert(rectangleArea(width, height));

// 5. Write a function to find the area and perimeter of a Circle

// function circleValues(rad) {
//   let result = `
//  Perimeter : ${2 * Math.PI * rad}
//  Area : ${Math.PI * rad ** 2}
//  `;
//   return result;
// }

// alert(
//   circleValues(
//     +prompt("Enter your number to show Area and Perimeter of Circle")
//   )
// );

// important => 6. Write a function to reverse a number

// function reverseNum(num) {
//   let reverse = 0;
//   while (num != 0) {
//     reverse = reverse * 10;
//     reverse = reverse + (num % 10);
//     num = Math.trunc(num / 10);
//   }
//   return reverse
// }
// alert(reverseNum(+prompt("Enter a number")));

// important => 7. Count number of Vowels in String

// function countVowel(str) {
//   let count = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) == "a" ||
//       str.charAt(i) == "e" ||
//       str.charAt(i) == "o" ||
//       str.charAt(i) == "u" ||
//       str.charAt(i) == "i"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// alert(countVowel(prompt("Write a World to show Vowels")));

// 8. Write a function to check if an input string is a palindrome

// function checkPalindrome(str) {
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) != str.charAt(str.length - i - 1)) {
//       return false;
//     }

//   }
//   return true;
// }
// alert(checkPalindrome(prompt("Write a World")));

// 9. Write a function to calculate simple interest based on the principle amount
// 9. تابعی بنویسید تا سود ساده را بر اساس مقدار اصلی محاسبه کند
// function simpleInt(principle, rate, time) {
//   let result = principle + principle * rate * time;
//   return result;
// }
// alert(simpleInt(2000, 5, 6));

// 10. Write a function to generate a random number
// function getRandom() {
//   let random = Math.trunc(Math.random() * 10 ** 5);
//   console.log(random);
// }
// getRandom();

// 11.Write a function to find Factorial of a number

function getFactorial(num) {
  if (num == 1) {
    return 1; // Termination condition
  }
  if (num == 0 || num < 0) {
    return 0; // Termination condition
  }
  return num * getFactorial(num - 1);
}

console.log(getFactorial(+prompt("Enter a number")));
