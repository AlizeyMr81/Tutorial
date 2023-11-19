// const btn = document.getElementById("btn");
// const h1Elem = document.getElementById("title");

// btn.addEventListener("click", function () {
//   h1Elem.remove();
// });

//////////////////////////////////////////////////////////
const listItems = document.querySelectorAll(".list-item");
listItems.forEach(function (items) {
  items.addEventListener("click", function (event) {
    //    console.log(event.target.parentElement);
    event.target.parentElement.remove()
  });
});
