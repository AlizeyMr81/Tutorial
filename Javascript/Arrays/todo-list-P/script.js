let newTodo = {};
let userOption = +prompt(`
Enter your option :
1. Add todo
2. Remove todo
3. Change status of todo
 `);

let todoList = [
  { id: 1, name: "Exercise", status: true },
  { id: 2, name: "Study", status: true },
  { id: 3, name: "lessen music", status: false },
];

if (userOption === 1) {
  let todoName = prompt("Enter your name's Todo");
  newTodo = {
    id: todoList.length + 1,
    name: todoName,
    status: false,
  };
  todoList.push(newTodo);
  console.log(todoList);
} else if (userOption === 2) {
  let removeTodo = prompt("Enter your Todo name for Remove");
  let indexTodo = todoList.findIndex(function (todoName) {
    return todoName.name === removeTodo;
  });

  todoList.splice(indexTodo, 1);
  console.log(todoList);
} else if (userOption === 3) {
  let userStatusTodo = prompt("Enter your Todo name");
  todoList.some(function (checkTodoName) {
    if (checkTodoName.name === userStatusTodo) {
      checkTodoName.status = true;
    }
  });
  console.log(todoList);
} else {
  alert("Please select correct option");
}
