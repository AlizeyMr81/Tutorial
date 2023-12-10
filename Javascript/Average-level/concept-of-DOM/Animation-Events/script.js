const setAnimationBtn = document.querySelector("button");
const divCicle = document.querySelector("#circle");
const divLine = document.querySelector("#line");
const pElem = document.querySelector("p");

function setAnimationLoading() {
  divLine.style.animation = "move 1s 5";
}

function animationStartHandler(event) {
  pElem.style.display = "block";

  console.log(event);
}

function animationRepeatHandler(event) {
  let randomColorRed = Math.random() * 255;
  let randomColorGreen = Math.random() * 255;
  let randomColorBlue = Math.random() * 255;

  randomColorRed = Math.trunc(randomColorRed);
  randomColorGreen = Math.trunc(randomColorGreen);
  randomColorBlue = Math.trunc(randomColorBlue);

  divLine.style.borderLeft =
    "4px  solid  rgb(" +
    randomColorRed +
    " , " +
    randomColorGreen +
    " , " +
    randomColorBlue +
    ")";

  console.log(event);
}

function animationEndHandler(event) {
  pElem.innerHTML = "Finished Animation";
  console.log(event);
}

setAnimationBtn.addEventListener("click", setAnimationLoading);
divLine.addEventListener("animationstart", animationStartHandler);
divLine.addEventListener("animationiteration", animationRepeatHandler);
divLine.addEventListener("animationend", animationEndHandler);
