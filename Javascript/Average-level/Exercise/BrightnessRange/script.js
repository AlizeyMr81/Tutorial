let $ = document;

const container = $.querySelector(".container");
const rangeInput = $.querySelector(".range");

rangeInput.addEventListener("change", function (event) {
  let brightnessValue = event.target.value;

  container.style.filter = " brightness(" + brightnessValue + "%" + ")";
});
