// find()  :

/*
syntax : 

array.find(function() {
    //code
})

*/

let product = [
  { id: 1, name: "laptop", price: 5000000 },
  { id: 2, name: "monitor lg", price: 1000000 },
  { id: 3, name: "car", price: 25000000 },
  { id: 4, name: "milk", price: 12000 },
  { id: 5, name: "phone", price: 2000000 },
];

let carData = product.find(function (item) {
  return item.name === "car";
});

console.log(carData);
