// Get the user's GPA and then set their level

// A for average 18 to 20 levels
// B for average 15 to 17 levels
// C for grade 12 to 14
// GPA less than 12 is conditional :(

let userGPA = +prompt("Enter your GPA", "0");

switch (+userGPA) {
  case 20:
  case 19:
  case 18:
    alert("Your level is A");
    break;
  case 17:
  case 16:
  case 15:
    alert("Your level is B");
    break;
  case 14:
  case 13:
  case 12:
    alert("Your level is C");
    break;
  default:
    alert(" GPA less than 12 is conditional :(");
    break;
}

// if (userGPA === 20 || userGPA === 19 || userGPA === 18) {
//   alert("Your level is A");
// } else if (userGPA === 17 || userGPA === 16 || userGPA === 15) {
//   alert("Your level is B");
// } else if (userGPA === 14 || userGPA === 13 || userGPA === 12) {
//   alert("Your level is C");
// } else {
//   alert(" GPA less than 12 is conditional :(");
// }
