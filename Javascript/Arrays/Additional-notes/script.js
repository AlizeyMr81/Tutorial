// Array.isArray() :
let scores = [25, 64, 84, 2, 6, 25, 78];
console.log(Array.isArray(scores));

// indexOf() :
console.log(scores.indexOf(2));

// lastIndexOf() :
console.log(scores.lastIndexOf(25));

// slice() :
let number = scores.slice(2, 6);
console.log("Use slice method : ", number);

// join() :
let str = scores.join(" | ");
console.log("Use join method : ", str);

// reverse() :
scores.reverse();
console.log("Use reverse method : ", scores);

// split() this method is of String :
let text = "25/64/84/2/6/25/78";
let textToArr = text.split("/");
console.log("Use split method : ", textToArr);
