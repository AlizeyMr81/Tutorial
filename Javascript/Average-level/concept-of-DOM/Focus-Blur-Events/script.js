let $ = document;
let usernameInput = $.querySelector("#username");
let passwordInput = $.querySelector("#password");
let span = $.getElementsByClassName("checkchare");
console.log(span);
// console.log(inputs);

function usernameFocus() {
  span[0].style.opacity = "1";
}
function usernameBlur() {
  let usernameValue = usernameInput.value;
  if (usernameValue.length > 12) {
    span[0].style.color = "green";
  }
}

function passwordFocus() {
  span[1].style.opacity = "1";
}

function passwordBlur() {
  let passwordValue = passwordInput.value;
  if (passwordValue.length > 8) {
    span[1].style.color = "green";
  }
}
