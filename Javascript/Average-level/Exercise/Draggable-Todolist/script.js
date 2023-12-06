let $ = document;

const addBtn = $.querySelector("#add_btn");
const divModal = $.querySelector("#todo_form");
const divOverlay = $.querySelector("#overlay");
const closeModalBtn = $.querySelector(".close-modal");
const todoInput = $.querySelector("#todo_input");
const todoSubmitInput = $.querySelector("#todo_submit");
const divStatus = $.querySelector("#no_status");
const showAlert = $.querySelector("#show_alert");
const divStatusTodoList = $.querySelectorAll(".status");

// Open Modal Window
function showModalWindow() {
  divModal.style.top = "15%";
  divOverlay.classList.add("active");
}

// Close Modal Window
function closeModalWindow() {
  divModal.style.top = "-50%";
  divOverlay.classList.remove("active");
  showAlert.style.opacity = 0;
  showAlert.style.visibility = "hidden";
}

// Add new Todo to first column
function AddNewTodo() {
  let newDivTodoElem = $.createElement("div");
  newDivTodoElem.className = "todo";
  newDivTodoElem.draggable = true;
  newDivTodoElem.setAttribute("ondragstart", "dragStartHandler(event)");
  newDivTodoElem.innerHTML = todoInput.value;
  newDivTodoElem.id = todoInput.value;
  let newSpanClose = $.createElement("span");
  newSpanClose.className = "close";
  newSpanClose.innerHTML = "&times;";
  newSpanClose.setAttribute("onclick", "removeTitleTodo(event)");
  newDivTodoElem.append(newSpanClose);

  if (todoInput.value) {
    divModal.style.top = "-50%";
    divOverlay.classList.remove("active");
    divStatus.append(newDivTodoElem);
  } else {
    showAlert.style.opacity = 1;
    showAlert.style.visibility = "visible";
  }
  todoInput.value = "";
}

// delete Todo of first column
function removeTitleTodo(event) {
  event.target.parentElement.remove();
}

// drag of Todo
function dragStartHandler(event) {
  event.dataTransfer.setData("elemId", event.target.id);
}
// Transfer Todo the corresponding columns
divStatusTodoList.forEach(function (items) {
  items.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  items.addEventListener("drop", function (event) {
    let targetID = event.dataTransfer.getData("elemID");
    let targetElem = $.getElementById(targetID);
    items.append(targetElem);
  });
});

// Events
addBtn.addEventListener("click", showModalWindow);
closeModalBtn.addEventListener("click", closeModalWindow);
todoSubmitInput.addEventListener("click", AddNewTodo);
