// forEach loop => forEach()

let users = ["Alireza", "Smith", 21];
users.forEach(function () {
  console.log("Alireza");
});

let color = ["Red", "Blue", "Purple", "Brown", "Green"];
color.forEach(function (colorName) {
  console.log(colorName);
});

// Index (optional) :

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (value, index) {
  console.log("Value : " + value + "\n" + "Index : " + index);
});

// Array (optional) :

numbers.forEach(function (value, index, array) {
  console.log(array);
});
