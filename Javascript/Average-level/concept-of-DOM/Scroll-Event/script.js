const divElem = document.querySelector("div");

function scrollHandler() {
  console.log(document.documentElement.scrollTop);
}

function divScrollHandler() {
  let pElem = divElem.nextElementSibling;
  pElem.innerHTML = "scroll top : " + divElem.scrollTop;
//   pElem.innerHTML = "scroll top : " + divElem.scrollLeft;
}
