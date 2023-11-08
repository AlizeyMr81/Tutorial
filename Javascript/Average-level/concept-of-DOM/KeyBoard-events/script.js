// keypress, keyup, keydown

let spanElem = document.getElementsByClassName("checkchare");
let inputsElem = document.getElementsByClassName("input");

function userValidation() {
  let usernameValue = inputsElem[0].value;
  if (usernameValue.length >= 12) {
    spanElem[0].style.color = "green";
  } else {
    spanElem[0].style.color = "#EF9A9A";
  }
}

function passwordValidation() {
  let passwordValue = inputsElem[1].value;
  if (passwordValue.length >= 8) {
    spanElem[1].style.color = "green";
  } else {
    spanElem[1].style.color = "#EF9A9A";
  }
}
