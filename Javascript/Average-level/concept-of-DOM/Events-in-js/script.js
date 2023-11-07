// Events :

let newParagraph = document.createElement("p");

newParagraph.setAttribute("class", "description");

newParagraph.innerHTML = "My name is Alireza";

let divElem = document.querySelector(".content");

divElem.append(newParagraph);

//////////////////////////////////////////////////////////

function clickFunc() {
  newParagraph.style.color = "blue";
} // change P element color

/////////////////////////////////////////////////

let ulElem = document.querySelector("ul");
// console.log(ulElem);

function removeBulletMenu() {
  ulElem.style.listStyleType = "none";
}
