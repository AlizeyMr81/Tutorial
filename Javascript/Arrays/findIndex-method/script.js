// findIndex()

/*
syntax : 

array.findIndex(function() {
    // code
})

*/

let scores = [18, 10, 20, 19, 17];

let userScores = scores.findIndex(function (number) {
  return number === 19;
});

console.log(userScores);
