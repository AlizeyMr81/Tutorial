let $ = document;
const btnTop = $.querySelector("#btn-top");
const btnBottom = $.querySelector("#btn-bottom");

btnTop.addEventListener("click", function () {
  window.scrollBy(0, 150);
});

btnBottom.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
