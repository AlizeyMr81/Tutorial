// getElementByID()
// getElementsByTagName()
//getElementsByClassName()
// querySelector()
// querySelectorAll()

let h1Elem = document.getElementById("title");

let liItems = document.getElementsByClassName("list-item");

// h1Elem.style.fontSize = "5rem";
// h1Elem.style.border = "2px solid blue";
// h1Elem.style.textAlign = "center";

// liItems[0].style.fontWeight = "bold";

// console.log(liItems[3].innerHTML);

let createImg = document.createElement("img");

createImg.setAttribute(
  "src",
  "../../../images/car_ir_eac5cbd8-e3d3-4ca9-aa96-34678d012cd1.jpg"
);
createImg.setAttribute("alt", "Car photo");

console.log(createImg);

// divElem[0].append(createImg);
// divElem[0].appendChild(createImg);
let divElem = document.getElementsByClassName("content");

////////////////////////////////////////////////////////////////////

function addPhoto() {
  divElem[0].append(createImg);
}

function changeColor() {
  h1Elem.style.color = "yellow";
}
