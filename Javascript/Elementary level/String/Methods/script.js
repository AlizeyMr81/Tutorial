// indexOf() :

let str = "Please locate where 'locate' occurs!";

console.log(str.indexOf("locate", 10));

// search() :

let text = "Please Locate where 'locate' occurs!";

console.log(text.search(/locate/i));

/*
The search() method cannot take a second start position argument.

The indexOf() method cannot take powerful search values (regular expressions).
*/

// trim() :

let str2 = "     I love JavaScript             ";

console.log(str2.trim());

// charAt() , charCodeAt() :

let str3 = "I love JavaScript";

console.log(str3.charCodeAt(2));

// concat() :

let str4 = "I love JavaScript";

console.log(str4.concat(" & React"));

// toLowerCase() , toUpperCase() :

let str5 = "I love JavaScript";

console.log(str5.toUpperCase());

// includes() :

let str6 = "I love JavaScript";

console.log(str6.includes("love"));

// important example :

// let str7 = "As sly as a fox, as strong as an ox";
// let target = "as";
// let pos = 0;

// while (true) {
//   let foundPos = str7.indexOf(target, pos);
//   if (foundPos == -1) {
//     break;
//   } else {
//     alert(`Found at ${foundPos}`);
//     pos = foundPos + 1;
//   }
// }

// starsWhit() , endsWhit() :

let str8 = "Alireza";
console.log(str8.startsWith("A"));
console.log(str8.endsWith("a"));

// substring() , slice() :

let str9 = "JavaScript";
// console.log(str9.slice(2, 6));
console.log(str9.substring(6, 2));

// codePointAt() , String.fromCodePoint()

let str10 = "JavaScript";

console.log("Z".codePointAt(0));
console.log( String.fromCodePoint(101));

