const pElem = document.querySelector(".text");
const input = document.querySelector(".input");

console.log(input.nodeName);
console.log(input.nodeType);

console.log(pElem.nodeName);
console.log(pElem.nodeType); // 1 because node type is element

let text = pElem.innerHTML;
