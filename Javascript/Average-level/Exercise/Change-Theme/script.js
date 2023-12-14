let $ = document;

const colorBtns = $.querySelectorAll(".btn");
let themeColors;

function changeColorTheme(e) {
  themeColors = e.target.dataset.color;
  document.documentElement.style.setProperty("--theme-color", themeColors);
  localStorage.setItem("themeColors", themeColors);
}

colorBtns.forEach(function (items) {
  items.addEventListener("click", changeColorTheme);
});

window.addEventListener("load", function () {
  let getLocalStorage = localStorage.getItem("themeColors");

  themeColors = getLocalStorage;

  if (themeColors === null) {
    document.documentElement.style.setProperty("--theme-color", " #ff1756");
  } else {
    document.documentElement.style.setProperty("--theme-color", themeColors);
  }
});
