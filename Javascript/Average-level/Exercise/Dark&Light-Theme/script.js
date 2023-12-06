let $ = document;

const switchElement = $.querySelector(".switch");
const divFlicker = $.querySelector(".flicker");
let darkLightTheme = false;
switchElement.addEventListener("click", function () {
  $.body.classList.toggle("dark");

  //   let beDarkClass = $.body.className.includes("dark");

  if (darkLightTheme) {
    localStorage.setItem("theme", "light");
    darkLightTheme = false;
  } else {
    localStorage.setItem("theme", "dark");
    darkLightTheme = true;
  }
});

window.onload = function () {
  let localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme === "dark") {
    $.body.classList.add("dark");
  }
};
