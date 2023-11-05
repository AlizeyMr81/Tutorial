// let message;
// let age = prompt("How old are you?", "");
// if (age == 20) {
//   message = "Hello world";
// } else if (age > 20) {
//   message = "Wow!!";
// } else if (age < 20) {
//   message = "Amazing";
// } else {
//   message = "Wrong";
// }
// alert(message);

// Conditional operator => ?
// Syntax => let result = condition ?  value1 : value2

// let age = prompt("How old are you?", "");

// let message =
//   age == 20
//     ? "Hello world"
//     : age < 20
//     ? "Wow!"
//     : age < 100
//     ? "Amazing"
//     : "Wrong";
// alert(message);

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greetings"
    : login == ""
    ? "No login"
    : "";
alert(message);
