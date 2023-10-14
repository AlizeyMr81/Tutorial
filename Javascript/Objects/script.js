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

// let user = {
//   name: "Ali",
//   age: 21,
//   "last name": "Zeighampour",
// };

// console.log(user);

// delete user["last name"];

// console.log(user);

// user.isAdmin = true;

// console.log(user);

///////////////////////////////////////////////////////

// let user = {
//   name: "John",
//   age: 21,
// };

// let key = prompt("what do you want about user","name");

// alert(user[key])

/////////////////////////////////////////////////////////// Computed properties :

// let fruit = prompt("Enter your a name of fruit", "apple");

// let bag = {};
// bag[fruit] = 5;

// console.log(bag);

// ------- Or

// let user = prompt("Enter name John");

// let userName = {
//   [user]: 5,
// };

// console.log(userName.John);

// ------------------------------------- Property value shorthand :

// function makeUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = makeUser("John", 31);

// console.log(user);

//---------------------------- Property names limitations :

// let obj = {
//   for: 1,
//   return: 2,
//   let: 6,
// };

// console.log(obj["for"]);

// ------------------------------------- Property existence test, “in” operator :
// syntax : "key" in object

// let user = {
//   name: "ali",
//   age: 25,
// };

// console.log("name" in user);
// console.log("family" in user);

// ------------------------------------------------ for...in :

let user = {
  name: "ali",
  age: 32,
  family: "Bahrami",
};

for(let key in user) {
  alert(key);
  alert(user[key])
}