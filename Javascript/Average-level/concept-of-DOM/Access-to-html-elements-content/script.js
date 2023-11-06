let h1Elem = document.getElementById("title");

console.log(h1Elem.innerHTML);

h1Elem.innerHTML = "Hello"; //changed content

let liItems = document.querySelectorAll(".menu .list-item");
// console.log(liItems[3].innerHTML);
// console.log(liItems[3].innerText);
console.log(liItems[3].textContent);

liItems[0].innerText = "Study";

///////////////////////////////////////////////////////

let input = document.getElementById("input");
console.log(input.value);

input.value = "Country";
