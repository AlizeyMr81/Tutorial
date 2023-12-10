let $ = document;
const itemInput = $.querySelector("#itemInput");
const addBtn = $.querySelector("#addButton");
const clearBtn = $.querySelector("#clearButton");
const todoList = $.querySelector("#todoList");
const showWarring = $.querySelector(".show-warring");

let todoListArr = [];

function addBtnTodo() {
  let todoAbject = {
    id: todoListArr.length + 1,
    content: itemInput.value,
    complete: false,
  };

  itemInput.value = "";

  todoListArr.push(todoAbject);
  setLocalStorage(todoListArr);
  madeTodosElem(todoListArr);
}

function setLocalStorage(todoArray) {
  localStorage.setItem("todoList", JSON.stringify(todoArray));
}

function madeTodosElem(todoArray) {
  let newTodoLiElem, newTodoLabelElem, newTodoCompleteBtn, newTodoDeleteBtn;

  todoList.innerHTML = "";

  todoArray.forEach(function (todo) {
    // console.log(todo);

    newTodoLiElem = $.createElement("li");
    newTodoLiElem.className = "completed well";

    newTodoLabelElem = $.createElement("label");
    newTodoLabelElem.innerHTML = todo.content;

    newTodoCompleteBtn = $.createElement("button");
    newTodoCompleteBtn.className = "btn btn-success";
    newTodoCompleteBtn.innerHTML = "Complete";
    newTodoCompleteBtn.setAttribute("onclick", "btnSuccess(" + todo.id + ")");

    newTodoDeleteBtn = $.createElement("button");
    newTodoDeleteBtn.className = "btn btn-danger";
    newTodoDeleteBtn.innerHTML = "Delete";
    newTodoDeleteBtn.setAttribute("onclick", "deleteBtn(" + todo.id + ")");

    newTodoLiElem.append(
      newTodoLabelElem,
      newTodoCompleteBtn,
      newTodoDeleteBtn
    );

    todoList.append(newTodoLiElem);

    if (todo.complete) {
      newTodoLiElem.className = "uncompleted well";
      newTodoCompleteBtn.innerHTML = "Uncompleted";
    }
  });
}

function btnSuccess(todoID) {
  let localStorageTodo = JSON.parse(localStorage.getItem("todoList"));
  todoListArr = localStorageTodo;

  todoListArr.forEach(function (items) {
    if (items.id === todoID) {
      items.complete = !items.complete;
    }
  });

  madeTodosElem(todoListArr);
  setLocalStorage(todoListArr);
}

function deleteBtn(todoID) {
  let localStorageTodo = JSON.parse(localStorage.getItem("todoList"));
  todoListArr = localStorageTodo;

  let indexTodo = todoListArr.findIndex(function (items) {
    return items.id === todoID;
  });

  todoListArr.splice(indexTodo, 1);

  madeTodosElem(todoListArr);
  setLocalStorage(todoListArr);
}

function clearBtnTodo() {
  todoListArr = [];
  madeTodosElem(todoListArr);
  localStorage.removeItem("todoList");
}

function getLocalStorage() {
  let localStorageTodo = JSON.parse(localStorage.getItem("todoList"));

  if (localStorageTodo) {
    todoListArr = localStorageTodo;
  } else {
    todoListArr = [];
  }
  madeTodosElem(todoListArr);
}

addBtn.addEventListener("click", addBtnTodo);
clearBtn.addEventListener("click", clearBtnTodo);
window.addEventListener("load", getLocalStorage);
itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtnTodo();
  }
});
