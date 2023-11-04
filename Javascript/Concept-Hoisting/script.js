// Hoisting _ Hoist

user1 = "Amir";

console.log(user1);

var user1; // hoist

/////////////////////////////////

console.log(user2); // undefined

var user2 = 20; // the value is not hoist

////////////////////////////////////////////////////
showMessage();

function showMessage() {
  console.log("Function declaration supports hoist");
}

// let showMessage = function () {
//     console.log("Function expression does not supports hoist");
// }
