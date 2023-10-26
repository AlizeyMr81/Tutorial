// every()

/*
syntax :

array.every(function() {
    //code
})

*/

let userAge = [20, 19, 27, 16, 33];

let result = userAge.every(function (age) {
    console.log(age);
    return age > 18;
});

console.log(result);
