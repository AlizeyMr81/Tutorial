// A word about "Length"

// let arr = [2, 5, 9, 10, 22, 31];

// console.log(arr);

// arr.length = 3;

// console.log(arr);

// arr.length = 6;

// console.log(arr); // the values do not return

// multidimensional array :

// let matrix = [
//   [2, 3, 4],
//   [12, 52, 61],
//   [1, 8, 9],
// ];

// console.log(matrix[1][1]);

// ///////////// ///////////////////////

function sumInput() {
  let userNumber = null;
  let arr = [];
  let sum = 0;

  while (userNumber != 0) {

    userNumber = +prompt("Enter a number");

    if (userNumber=== "" || isNaN(userNumber)) {
      break;
    } else if (userNumber != 0) {
      arr.push(userNumber);
    }

  }

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  alert(sum);
}

sumInput();
