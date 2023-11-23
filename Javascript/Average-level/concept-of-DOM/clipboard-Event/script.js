let textareaElem = document.querySelector("#editor");
let pElem = document.querySelector("#log");

textareaElem.addEventListener("cut", function (event) {
  event.preventDefault();
  pElem.innerHTML = "Log :" + "Cut";
});

textareaElem.addEventListener("paste", function (event) {
  event.preventDefault();
  pElem.innerHTML = "Log :" + "Paste";
});

textareaElem.addEventListener("copy", function (event) {
  event.preventDefault();
  pElem.innerHTML = "Log :" + "Copy";
});
