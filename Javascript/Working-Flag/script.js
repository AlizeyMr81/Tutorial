// Flag

let errors = 0; // errors is flag variable

for (let i = 0; i < 10; i++) {
  if (errors === 1) {
    errors++;
  }
}

if (errors) {
  alert("There is a problem!");
} else {
  alert("There is not a problem!");
}
