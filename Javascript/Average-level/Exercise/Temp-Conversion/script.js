let $ = document;
const convertBtn = $.querySelector(".convertButton");
const resetBtn = $.querySelector(".resetButton");
const changeBtn = $.querySelector(".changeButton");
const input = $.getElementById("converter");
const spanCelsius = $.querySelector(".C");
const spanFahrenheit = $.querySelector(".F");
const pElem = $.querySelector(".result");
let change = false;
let result;

function convert() {
  pElem.innerHTML = "";
  if (input.value === "") {
    pElem.innerHTML = "Write correct value!";
    pElem.style.color = "red";
  } else if (input.getAttribute("placeholder") === "°C") {
    result = (input.value * 9) / 5 + 32;
    if (result) {
      pElem.innerHTML = input.value + "°C" + " to " + result + "°F";
      pElem.style.color = "rgb(255, 255, 102)";
    } else {
      pElem.innerHTML = "Wrong value!";
      pElem.style.color = "red";
    }
  } else {
    result = ((input.value - 32) * 5) / 9;
    if (result) {
      pElem.innerHTML = input.value + "°F" + " to " + result.toFixed(2) + "°C";
      pElem.style.color = "rgb(255, 255, 102)";
    } else {
      pElem.innerHTML = "Wrong value!";
      pElem.style.color = "red";
    }
  }
}
function swap() {
  if (change) {
    spanCelsius.innerHTML = "°C";
    spanFahrenheit.innerHTML = "°F";
    input.setAttribute("placeholder", "°C");
    $.title = "°C to °F";
    change = false;
  } else {
    spanCelsius.innerHTML = "°F";
    spanFahrenheit.innerHTML = "°C";
    input.setAttribute("placeholder", "°F");
    $.title = "°F to °C";
    change = true;
  }
}
function reset() {
  pElem.innerHTML = "";
  input.value = "";
}

convertBtn.addEventListener("click", convert);
changeBtn.addEventListener("click", swap);
resetBtn.addEventListener("click", reset);
