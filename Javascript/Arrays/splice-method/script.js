// splice()

/*
syntax:

array.splice(index, howmany, item1, item2, ... , itemX)

*/

let scores = [9, 10, 7, 4, 1, 6, 8, 12];

scores.splice(6, 0, 18, 15, 14, 11, 16);

console.log(scores);
