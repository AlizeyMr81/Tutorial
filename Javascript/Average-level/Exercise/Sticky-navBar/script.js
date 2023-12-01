let $ = document;

const navBar = $.querySelector("#mainNav");
const logo = $.querySelector("img");

document.addEventListener("scroll", function () {
  let scrollNumber = document.documentElement.scrollTop;
  if (scrollNumber > 0) {
    navBar.classList.add("bg-black", "txt-white");
    logo.style.height = "64px";
  } else {
    navBar.classList.remove("bg-black", "txt-white");
    logo.style.height = "84px";
  }
});
