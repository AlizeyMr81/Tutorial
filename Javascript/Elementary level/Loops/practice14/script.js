// دو عدد از کاربر دریافت کرده و عدد اول را به توان عدد دوم برسانید

// نکته: با حلقه انجام شود

let firstNumber = +prompt("Enter first number ", 1); //2
let secondNumber = +prompt("Enter first number ", 1); // 3

let power = 1;

for (let i = 0; i < secondNumber; i++) {
  power *= firstNumber;
}

alert(power);

//--------------------------------------

// let c = 0;
// while (c < secondNumber) {
//   power *= firstNumber;
//   c++;
// }

// alert(power);

//---------------------------------------

// let b = 0;
// do {
//     power *= firstNumber;
//     b++
// } while (b < secondNumber);

// alert(power);
