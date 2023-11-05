// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

for (let i = 0; i < 100; ) {
  let input = prompt("Enter number greater than 100 ?", 0);
  if (!input || input > 100) {
    break;
  }
}

//    Or

// do {
//   num = prompt("Enter number greater than 100 ?", 0);
// } while (num <= 100 && num);
