let $ = document;

const h1Elements = $.querySelectorAll("h1");
const divDrop = $.querySelector(".drop");

h1Elements.forEach(function (items) {
  items.draggable = true;

  items.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("elemId", event.target.id);
  });
});

divDrop.addEventListener("drop", function (event) {
  let elementID = event.dataTransfer.getData("elemId");
  let targetElement = document.getElementById(elementID);

  divDrop.append(targetElement);
});

divDrop.addEventListener("dragover", function (event) {
  event.preventDefault();
});
