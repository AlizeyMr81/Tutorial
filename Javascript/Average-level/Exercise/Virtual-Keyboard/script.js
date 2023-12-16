let $ = document;

const h1Elem = $.querySelector(".title");

function findKeys(event) {
  addValueToDom(event);

  let userEventKey = event.key.toUpperCase();
  let mainKey = $.getElementById(userEventKey);

  mainKey.classList.add("hit");

  mainKey.addEventListener("animationend", function () {
    mainKey.classList.remove("hit");
  });
}

function addValueToDom(event) {
  if (event.key === "Backspace") {
    h1Elem.innerHTML = h1Elem.innerHTML.slice(0, -1);
    return;
  }
  h1Elem.innerHTML += event.key;
}

$.addEventListener("keydown", findKeys);
