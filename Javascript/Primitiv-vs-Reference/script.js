// differences between Primitive and Reference data type :

let num1 = 5;
let num2 = num1;
num2 = 10;

console.log("num1 : ", num1);
console.log("num2 : ", num2);

////////////////////////////////////////////////

let userName1 = {
  id: 1,
  name: "Phone",
  price: 6000000,
};

let userName2 = userName1;
userName1.brand = "Apple";

console.log("userName1 : ", userName1);
console.log("userName2 : ", userName2);
