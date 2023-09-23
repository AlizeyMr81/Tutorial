// Function declaration

/* 

function name(parameter1,parameter2,....parameterN) {

 //body

 }

 */

// function showResult() {
//   let num1 = 5;
//   let num2 = 8;
//   let result = num1 + num2;
//   alert(result);
// }

// showResult();

// Local variables :

// function showMessage() {
//   let age = 18;
//   alert(age);
// }

// Outer variables :

// let userName = "Sara";

// function showMessage() {
//   let userName = "John";

//   let age = "My name is " + userName;

//   alert(age);
// }

// showMessage();
///////////////////////////////////////////////////////////// Next part : Parameters

// function showResult(result1, result2) {
//   alert("The first result is : " + result1);
//   alert("The seconde result is : " + result2);
// }

// let name = "Alireza";

// showResult(0 || 5, 7);

////////////////////////////////////////////// Default Parameters :

// function showMessage(userAge, userName = "Alireza") {
//   alert("My age is : " + userAge);
//   alert("My name is : " + userName);
// }

// showMessage(18);

// Alternative default parameters

// function showMessage(userAge, userName) {
//   alert("My name is : " + userAge);
//   if (userName === undefined) {
//     userName = "My name is : " + "Alireza";
//   }
//   alert(userName);
// }

// showMessage(18);

// ----------------------

// function showMessage(userAge, userName) {
//   alert("My name is : " + userAge);
//   userName = userName || "My name is : " + "Alireza";
//   alert(userName);
// }

// showMessage(18);

// -------------------------

function showCount(count) {
  alert(count ?? "Empty");
}
showCount(null);
showCount();
showCount(0);
