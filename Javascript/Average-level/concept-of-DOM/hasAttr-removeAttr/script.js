const h1Elem = document.querySelector(".title");
const input = document.querySelector(".input");
const btn = document.querySelector("#btn");

// hasAttribute Method :

// console.log(h1Elem.hasAttribute("id"));

let result = h1Elem.hasAttribute("id");
console.log(result); //

//////////////////////////////////////////////////

// removeAttribute Method :

btn.addEventListener("click", function () {
  input.removeAttribute("placeholder");
});
