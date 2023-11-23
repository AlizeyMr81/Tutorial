const ulElem = document.querySelector(".todos");
const inputElem = document.querySelector("input");
const formToDoElem = document.querySelector(".add");

formToDoElem.addEventListener("submit", function (event) {
  event.preventDefault();
});

function addNewToDo(textInput) {
  let newLiElem = document.createElement("li");
  newLiElem.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );

  let newSpanElem = document.createElement("span");
  newSpanElem.innerHTML = textInput;

  let iconTrash = document.createElement("i");
  iconTrash.className = "fa fa-trash-o delete";

  iconTrash.addEventListener("click", function () {
    iconTrash.parentElement.remove();
  });

  newLiElem.append(newSpanElem, iconTrash);
  ulElem.append(newLiElem);
}

inputElem.addEventListener("keydown", function (event) {
  let textInput = event.target.value.trim();
  if (event.key === "Enter") {
    if (textInput) {
      inputElem.value = "";
      addNewToDo(textInput);
    } else {
      alert("Please Write the value");
    }
  }
});
