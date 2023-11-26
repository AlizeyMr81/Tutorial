const boxElem = document.getElementById("box");
const btn = document.getElementById("btn");
const select = document.querySelector("#select");

function changeColorHandler() {
  boxElem.style.backgroundColor = select.value;
}

function removeChangeEvent() {
  select.removeEventListener("change", changeColorHandler);
}

btn.addEventListener("click", removeChangeEvent);
select.addEventListener("change", changeColorHandler);
