const bodyElem = document.querySelector("body");
const section = document.querySelector("#starter");
const heading = document.querySelector("#heading");
const ascii = document.querySelector("#ascii");
const infos = document.querySelector("#infos");

const keyCode = document.querySelector("#keyCode");
const key = document.querySelector("#key");
const keyLocation = document.querySelector("#location");
const keyWhich = document.querySelector("#which");
const code = document.querySelector("#code");

bodyElem.addEventListener("keydown", function (event) {
  event.preventDefault();
  console.log(event);
  section.style.display = "none";
  heading.style.display = "flex";
  ascii.style.display = "flex";
  infos.style.display = "flex";
  keyCode.innerHTML = event.keyCode;
  key.innerHTML = event.key;
  keyLocation.innerHTML = event.location;
  keyWhich.innerHTML = event.which;
  code.innerHTML = event.code;
});
