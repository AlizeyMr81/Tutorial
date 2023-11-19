const divElem = document.querySelector("#myDiv");
const pElem = document.querySelector(".text");
const input = document.querySelector(".input");

let childrenOfBody = document.body.childNodes;
console.log(childrenOfBody);

let childElem = divElem.childNodes;
console.log(childElem);

console.log(input.nodeName);
console.log(input.nodeType);
console.log(input.nodeValue);
let parentElem = input.parentNode;
console.log(parentElem);

console.log(pElem.nodeName);
console.log(pElem.nodeType); // 1 because node type is element
console.log(pElem.childNodes);

