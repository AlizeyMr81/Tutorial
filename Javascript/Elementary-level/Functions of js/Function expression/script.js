"use strict";

// Function expression :

// let showMessage = function () {
//   alert("Hello");
// };

// -------------------------------------------------------------Function is a Value :

// let sayHi = function () {
//   alert("Hello");
// };

// let func = sayHi;

// func();
// sayHi();

//-------------------------------------------------------------- Callback functions :

// function getValue(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }

// getValue(
//   "Do you agree?",
//   function () {
//     alert("You agreed");
//   },
//   function () {
//     alert("You canceled the execution.");
//   }
// );

// -------------------------------------------------- Function expression VS Function declaration :

// sayHi(); // Error

// let sayHi = function () {
//   alert("Hello");
// };

// But

sayHi();

function sayHi() {
  alert("Hello");
}

