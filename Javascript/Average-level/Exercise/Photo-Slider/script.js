let $ = document;

const imgElem = $.querySelector("img");
const prevBtn = $.querySelector(".prev");
const nexBtn = $.querySelector(".next");

let srcImages = [
  "../../images/image1.jpg",
  "../../images/a588de68-e556-4943-9475-e351b746f844.jpg",
  "../../images/AQLQZUCO3FKSTHLXOSYDHJ2NHE.avif",
  "../../images/image3.jpg",
];

let indexSrc = 0;

function previousBtnHandler() {
  indexSrc--;
  if (indexSrc < 0) {
    indexSrc = srcImages.length - 1;
  }

  imgElem.src = srcImages[indexSrc];
}

function nextBtnHandler() {
  indexSrc++;
  if (indexSrc > srcImages.length - 1) {
    indexSrc = 0;
  }

  imgElem.src = srcImages[indexSrc];
}

setInterval(nextBtnHandler, 3000);

prevBtn.addEventListener("click", previousBtnHandler);
nexBtn.addEventListener("click", nextBtnHandler);
