//

let isLogin = true;
if (isLogin) {
  console.log("Hello world");
}

// Use === Comparison :
let x = 0;
let y = false;
console.log(0 == false); // true
console.log(0 === false); // false

// Declare Variables Outside of the For Statement
let number = [1, 2, 12, 18, 5, 9];
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum = sum + number[i];
}
console.log(sum);

// End Your Switches with Defaults
let num = 5;
switch (num) {
  case 1:
    console.log("How are you ??");
    break;
  case 8:
    console.log("Yeah body");
    break;
  case 5:
    console.log("Welcome");
    break;
  default:
    console.log("Im strong");
}

// Use Array push instead of direct assignment to add items to an array.
let someStackGood = [];
someStackGood.push("abracadabra");
console.log(someStackGood);
// let someStackBad = [];
//someStackBad[someStackBad.length] = 'abracadabra';
