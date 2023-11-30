let $ = document;

const inputField = $.querySelector("#input-field");
const divContainer = $.querySelector("#listed");
const btnSave = $.querySelector("#btn-save");
const btnDelete = $.querySelector("#btn-delete");
const colorBox = $.querySelectorAll(".color-box");

colorBox.forEach(function (items) {
  items.addEventListener("click", function () {
    colorsName = items.style.backgroundColor;
    inputField.style.backgroundColor = colorsName;
  });
});

function addNote() {
  let newDivCardElem = $.createElement("div");
  newDivCardElem.setAttribute("class", "card shadow-sm rounded");
  newDivCardElem.setAttribute("onclick", "removeNote(event)");
  let inputBg = inputField.style.backgroundColor;
  newDivCardElem.style.backgroundColor = inputBg;

  let newPElem = $.createElement("p");
  newPElem.setAttribute("class", "card-text p-3");
  newPElem.innerHTML = inputField.value;

  newDivCardElem.append(newPElem);

  divContainer.append(newDivCardElem);
}

function removeNote(event) {
  event.target.parentElement.remove();
}

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (inputField.value === "") {
      alert("I love you Ziba");
    } else {
      addNote();
      inputField.value = "";
      inputField.style.backgroundColor = "#fff";
    }
  }
});

btnSave.addEventListener("click", function () {
  if (inputField.value === "") {
    alert("I love you Ziba");
  } else {
    addNote();
    inputField.value = "";
    inputField.style.backgroundColor = "#fff";
  }
});

btnDelete.addEventListener("click", function () {
  inputField.value = "";
  inputField.style.backgroundColor = "#fff";
});
