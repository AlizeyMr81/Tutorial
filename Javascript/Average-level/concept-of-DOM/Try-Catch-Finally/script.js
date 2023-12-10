const pElem = document.querySelector("p");
const inputElem = document.querySelector("input");
const btn = document.querySelector("button");

// try {
//   console.log(number);
// } catch (err) {
//   pElem.innerHTML = err.message;
// }

function checkValueInput() {
  try {
    if (inputElem.value.length > 8) {
      throw "Too High";
    } else {
      throw "Too Low";
    }
  } catch (error) {
    pElem.innerHTML = error;
  } finally {
    inputElem.value = "";
  }
}

btn.addEventListener("click", checkValueInput);
