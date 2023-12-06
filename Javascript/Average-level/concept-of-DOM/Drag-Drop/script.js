let $ = document;

const h1Elements = $.querySelectorAll("h1");
const divDrop = $.querySelector(".drop");

// Dragged -> onDragstart - ondrag - onDragEnd
// dropped -> onDargEnter - onDargOver - onDragLeave - onDrop

h1Elements.forEach(function (items) {
  items.draggable = true;

  items.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("elemId", event.target.id);
    // console.log("Drag Start");
  });

  items.addEventListener("drag", function () {
    // console.log("Drag");
  });

  items.addEventListener("dragend", function () {
    // console.log("Drag End");
  });
});

divDrop.addEventListener("drop", function (event) {
  let elementID = event.dataTransfer.getData("elemId");
  let targetElement = document.getElementById(elementID);

  divDrop.append(targetElement);

  console.log("Drop");
});

divDrop.addEventListener("dragover", function (event) {
  event.preventDefault();
  console.log("Drag Over");
});
