// addEventListener :
let $ = document;

let btn = $.querySelector(".btn");
let imgElem = $.querySelector(".image");
let bulbFlag = false;

// btn.addEventListener("click", function () {
//   let num1 = 5;
//   let num2 = 10;
//   console.log(num1 + num2);
// });

// btn.addEventListener("click", sum);
// function sum() {
//   let num1 = 5;
//   let num2 = 10;
//   console.log(num1 + num2);
// }

/////////////////////////////////////////////////////////////////////////

// btn.addEventListener("click", function () {
//   if (bulbFlag) {
//     imgElem.setAttribute("src", "../../images/bulboff.gif");
//     btn.innerHTML = "Turn on";
//     bulbFlag = false;
//   } else {
//     imgElem.setAttribute("src", "../../images/bulbon.gif");
//     btn.innerHTML = "Turn off";
//     bulbFlag = true;
//   }
// });

function clickFunc() {
  if (bulbFlag) {
    imgElem.setAttribute("src", "../../images/bulboff.gif");
    btn.innerHTML = "Turn on";
    bulbFlag = false;
  } else {
    imgElem.setAttribute("src", "../../images/bulbon.gif");
    btn.innerHTML = "Turn off";
    bulbFlag = true;
  }
}

btn.addEventListener("click", clickFunc);
