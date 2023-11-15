const h1Elem = document.querySelector(".title");
const input = document.querySelector(".input");

console.log(h1Elem.id);
console.log(input.placeholder);

console.log(h1Elem.getAttribute("id"));
console.log(input.getAttribute("placeholder"));

/////////////////// Now Differences :

console.log(h1Elem.color); // undefined
console.log(h1Elem.getAttribute("color")); // red

////////////////////////////////////////////////////////

h1Elem.size = "24px";

console.log(h1Elem.size); // 24px
console.log(h1Elem.getAttribute("size")); // null

///////////////////////////////////////////////////////////////

input.setAttribute("border", "none");

console.log(input.border); // undefined
console.log(input.getAttribute("border")); // none
