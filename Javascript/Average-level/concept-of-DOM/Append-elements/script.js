// Append Elements :

// Create HTML Elements Whit js  :

let newParagraph = document.createElement("p");

newParagraph.innerHTML = "My name is Alireza and my job is Web Developer";

newParagraph.setAttribute("class", "description");
newParagraph.setAttribute("id", "Paragraph");
newParagraph.style.color = "green";
newParagraph.style.fontWeight = "bold";
newParagraph.style.textDecoration = "underline";

let divElem = document.querySelector(".content");
// console.log(divElem);

// divElem.append(newParagraph);// Added p to div

divElem.appendChild(newParagraph); // Added p to div

console.log(divElem);
