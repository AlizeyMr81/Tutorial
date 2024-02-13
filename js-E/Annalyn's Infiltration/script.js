const inputElem = document.querySelector("input");
const pElem = document.querySelector("#show-number");

function reverse() {
  pElem.innerHTML = "";
  let string = inputElem.value.toString();

  let strToArr = string.split("");

  let reverseItems = strToArr.reverse();

  reverseItems = reverseItems.join("");

  let number = Number(reverseItems);

  pElem.innerHTML = number;
}
