const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

// input.addEventListener("focus", function (event) {
//   if (!event.bubbles) {
//     console.log("ali");
//   }
// });

///////////////////////////////////////////////

btn.addEventListener("click", function (event) {
  console.log(event.target);
});

/////////////////////////////////////////////////////

input.addEventListener("keyup", function (event) {
  console.log(event);
  if (event.keyCode === 13) {
    console.log("Hello");
  }
});
