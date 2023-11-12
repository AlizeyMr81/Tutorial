//classList property :

const $ = document;
let btn = $.querySelector(".btn");
let h1Elem = $.getElementById("title");
let click = false; // Flag

btn.addEventListener("click", function () {
  //   h1Elem.setAttribute("class", "color");
  //   if (click) {
  //     h1Elem.classList.remove("change-color");
  //     click = false;
  //   } else {
  //     h1Elem.classList.add("change-color");
  //     click = true;
  //   }
  h1Elem.classList.toggle("change-color");
});
