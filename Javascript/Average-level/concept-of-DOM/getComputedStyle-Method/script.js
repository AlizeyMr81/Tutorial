let $ = document;

const pElem = $.querySelector("#text");

console.log(pElem.style.color); // aqua

// console.log(pElem.style.width); // Return Empty String

let pElemStyles = getComputedStyle(pElem);

console.log(pElemStyles.fontWeight);
console.log(pElemStyles.fontFamily);
console.log(pElemStyles.display);
console.log(pElemStyles.alignItems);
console.log(pElemStyles.color);
