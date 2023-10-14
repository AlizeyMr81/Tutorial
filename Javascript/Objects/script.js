/* Objects :

let user = new Object();

let user = {};

*/

// let user = {
//   name: "Ali",
//   age: 21,
//   family: "Zeighampour",
//   id: "5",
// };

// console.log(user);

// console.log(user["family"]);

// user.name = "Reza";

// console.log(user);

///////////////////////////////////////// Store the object in the array :

// let users = [
//   { id: 5, name: "Ali", family: "Bahrami", age: 21 },
//   { id: 6, name: "Mohammad", family: "abdolahiyan", age: 37 },
//   12,
// ];

// console.log(users);

// console.log(users[0].name);

// users[1].age = 40;

// console.log(users);

////////////////////////////////////////////////////////////////////////// delete operator :

let user = {
  name: "Ali",
  age: 21,
  "last name": "Zeighampour",
};

console.log(user);

delete user["last name"];

console.log(user);

user.isAdmin = true;

console.log(user);
