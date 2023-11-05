// Add or get Attribute :

let h1Elem = document.getElementById("title");

// console.log(h1Elem.getAttribute("id"));
h1Elem.setAttribute("class", "main_header");

/////////////////////////////////////////////////////

let liItems = document.getElementsByClassName("list-item");

liItems[2].setAttribute("style", "color:green;"); // change color
