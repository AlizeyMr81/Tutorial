let $ = document;
let h1Elem = $.querySelector("#title");
let selectElem = $.querySelector("#colors");

selectElem.addEventListener("change", function () {
  document.body.style.backgroundColor = selectElem.value;
});
