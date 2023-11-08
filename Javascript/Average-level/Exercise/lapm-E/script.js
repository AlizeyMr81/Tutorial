// یک عکس لامپ و یک دکمه داشته باشید
// با کلیک روی دکمه، لامپ روشن و خاموش بشه

// (src تغییر)

let imgElem = document.querySelector("div img");
let btn = document.getElementById("btn");
btn.style.cursor = "pointer";

let bulbFlag = false; //Bulb is Off

// function turnOnOrOff(){
//   // turn on Or off (Lamp)

//   if (btn.innerHTML === "Lamp off") {
//     imgElem.setAttribute("src", "../../images/bulboff.gif");
//     btn.innerHTML = "Lamp on";
//   } else {
//     imgElem.setAttribute("src", "../../images/bulbon.gif");
//     btn.innerHTML = "Lamp off";
//   }
// }

function turnOnOrOff() {
  if (bulbFlag) {
    imgElem.setAttribute("src", "../../images/bulboff.gif");
    bulbFlag = false;
    btn.innerHTML = "Turn On";
  } else {
    imgElem.setAttribute("src", "../../images/bulbon.gif");
    bulbFlag = true;
    btn.innerHTML = "Turn Off";
  }
}
