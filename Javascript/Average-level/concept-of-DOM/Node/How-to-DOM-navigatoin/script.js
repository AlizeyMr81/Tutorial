const h1Elem = document.getElementById("h1");
const h3Elem = document.getElementById("h3");
const menu = document.querySelector(".menu");

// parentNode , parentElement

// let divParents = h1Elem.parentNode;
// let divParents = h1Elem.parentElement;
// console.log(divParents);
// console.log(divParents.parentElement);
// console.log(h3Elem.nextSibling.nextSibling); // return comment

// -------------------------------------------------------------------------

/*
nextElementSibling , nextSibling

previousElementSibling , previousSibling
*/
// console.log(h3Elem.nextElementSibling.nextElementSibling); // show h5
// console.log(h3Elem.nextSibling);
// console.log(h3Elem.previousElementSibling);
// console.log(h3Elem.previousSibling);

//CHILD OF ELEMENT :

// console.log(menu.childElementCount);
// console.log(menu.children); // just return child element
// console.log(menu.childNodes);
// console.log(menu.hasChildNodes());
// console.log(menu.lastElementChild);
// console.log(menu.lastChild);
// console.log(menu.firstElementChild);
// console.log(menu.firstChild);
console.log((menu.children[1].children[0].style.color = "red"));
