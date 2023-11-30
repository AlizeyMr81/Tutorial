// touchmove, touchstart, touchend, touchcancel

const btn = document.querySelector("#btn");
const pElem = document.querySelector("#text");

btn.addEventListener("touchstart", function () {
  document.body.style.backgroundColor = "red";
});

document.body.addEventListener("touchmove", function () {
  btn.style.color = "blue";
});

document.body.addEventListener("touchend", function () {
  pElem.style.display = "block";
});
