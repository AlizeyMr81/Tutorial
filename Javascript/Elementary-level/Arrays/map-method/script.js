// map()

/*
syntax:

array.map(function(){
    //code
});

*/

let scores = [1, 2, 3, 4, 5, 6, 7];

let scoresPower = scores.map(function (powerNumber) {
  return powerNumber ** 2;
});

console.log(scoresPower);
