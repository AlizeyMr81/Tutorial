const $ = document;
const bodyElem = $.body;
const divContextMenu = $.querySelector("#contextMenu");

bodyElem.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  let pageXContextMenu = event.pageX;
  let pageYContextMenu = event.pageY;
  divContextMenu.style.display = "block";
  divContextMenu.style.top = pageYContextMenu + "px";
  divContextMenu.style.left = pageXContextMenu + "px";
});

bodyElem.addEventListener("click", function () {
  divContextMenu.style.display = "none";
});

bodyElem.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    divContextMenu.style.display = "none";
  }
});
