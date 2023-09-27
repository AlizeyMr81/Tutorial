// For loop :

/*

for (begin; condition ; step) {

// loop body

}
 
 */

// let i = 0;

// for (i = 0; i < 3; i++) {
//   alert(i);
// }

// alert(i); // show number 3

// ----------------- Break :

// let sum = 0;

// for (; true; ) {
//   let value = +prompt("Enter your number", "");

//   if (!value) {
//     break;
//   } else {
//     sum += value;
//   }
// }

// alert("Sum : " + sum);

// ------------------------ Continue :

for (let value = 0; value < 12; value++) {
  if (value % 2 === 0) {
    continue;
  }

  alert(value); // 1, then 3, 5, 7
}
