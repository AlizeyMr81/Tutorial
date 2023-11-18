const loginForm = document.querySelector("#form");
const textInput = document.querySelector("#text");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);
});

////////////////////////////////

textInput.addEventListener("keydown", function (event) {
  //   event.preventDefault();
  console.log(event);
});

/////////////////////////////////////////
