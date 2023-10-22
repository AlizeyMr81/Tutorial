// 1. Check if a number is odd or even in JavaScript

// let userNumber = +prompt("Enter your number", "2");
// if (userNumber % 2 == 0) {
//   alert('Your number is "even" ');
// } else {
//   alert('Your number is "odd"');
// }

// 2. Check if input variable is a number or not

// let userNumber = +prompt("Enter your number", "2");
// if (isNaN(userNumber)) {
//   alert("Please enter a number");
// } else {
//   alert("You can enter the site");
// }

// 3. Find the largest of two number

// function getLargestNumber(firstNumber, secondeNumber) {
//   if (firstNumber > secondeNumber) {
//     alert(firstNumber + " > " + secondeNumber);
//   } else if (secondeNumber > firstNumber) {
//     alert(secondeNumber + " > " + firstNumber);
//   } else {
//     alert(firstNumber + " = " + secondeNumber);
//   }
// }
// getLargestNumber(
//   +prompt("Enter your first number"),
//   +prompt("Enter your seconde number")
// );

// 4. Find the largest of three number

// let getLargestNumber = function (num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     alert("Your first number is the largest number");
//   } else if (num2 > num3) {
//     alert("Your seconde number is the largest number");
//  } else {
//     alert("Your third number is the largest number");
//   }
// };
// getLargestNumber(
//   +prompt("Enter first number"),
//   +prompt("Enter seconde number"),
//   +prompt("Enter seconde number")
// );

// 5. Check if a triangle is equilateral, scalene, or isosceles

// function findTriangleType(side1, side2, side3) {
//   if (side1 == side2 && side2 == side3) {
//     alert("Equilateral triangle");
//   } else if (side1 == side2 || side2 == side3 || side1 == side3) {
//     alert("Isosceles triangle");
//   } else {
//     alert("Scalene triangle.");
//   }
// }
// findTriangleType(
//   prompt("Enter first number"),
//   prompt("Enter your seconde number"),
//   prompt("Enter your third number")
// );

// 6. Find the a number is present in given range

// function checkInRange(number, start, end) {
//   if (number >= start && number <= end) {
//     alert(start + " < " + number + " < " + end);
//   } else {
//     alert(
//       "Your first number is not between the second number and third number"
//     );
//   }
// }
// checkInRange(
//   +prompt("Enter your first number"),
//   +prompt("Enter your seconde number"),
//   +prompt("Enter your third number")
// );

// 7. Perform arithmetic operations on two numbers

// let num1 = +prompt("Enter your first number");
// let num2 = +prompt("Enter your seconde number");
// let result = prompt(
//   "What kind of operation do you want to apply to the numbers you entered?",
//   "add"
// );
// if (result == "add") {
//   alert(num1 + num2);
// } else if (result == "subtract") {
//   alert(num1 - num2);
// } else if (result == "multiply") {
//   alert(num1 * num2);
// } else if (result == "divide") {
//   alert(num1 / num2);
// } else if (result == "modulus") {
//   alert(num1 % num2);
// } else {
//   alert("Invalid operation");
// }

// 8. Find check if a year is leap year or not

// let year = prompt("Enter your number");

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   alert("leap year");
// } else {
//   alert("Is not leap year");
// }

// 9. Find the grade for input marks

// let userGrade = +prompt("Enter your Grade");
// if (userGrade >= 90 && userGrade <= 100) {
//   alert("S");
// } else if (userGrade >= 80 && userGrade <= 90) {
//   alert("A");
// } else if (userGrade >= 70 && userGrade <= 80) {
//   alert("B");
// } else if (userGrade >= 60 && userGrade <= 70) {
//   alert("C");
// } else if (userGrade >= 50 && userGrade <= 60) {
//   alert("D");
// } else if (userGrade >= 40 && userGrade <= 50) {
//   alert("E");
// } else if (userGrade >= 0 && userGrade <= 40) {
//   alert("Student has failed");
// } else {
//   alert("Invalid marks");
// }


