let $ = document;

const sectionElem = $.querySelector("section");
const modalDivElem = $.querySelector(".modal-parent");
const btn = $.querySelector("button");
const spanElem = $.querySelector(".X");

$.body.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalDivElem.style.display = "none";
    sectionElem.style.filter = "blur(0px)";
    btn.style.outline = "none";
  }
});

btn.addEventListener("click", function () {
  modalDivElem.style.display = "block";
  sectionElem.style.filter = "blur(10px)";
  //   btn.blur() // Output as in code line 12
});

spanElem.addEventListener("click", function () {
  modalDivElem.style.display = "none";
  sectionElem.style.filter = "blur(0px)";
});
