const inputElem = document.querySelector("#input");
const spanCounter = document.querySelector(".counter");
const maxLength = inputElem.getAttribute("maxlength");

inputElem.addEventListener("keyup", function () {
  spanCounter.innerHTML = maxLength - inputElem.value.length;
});
