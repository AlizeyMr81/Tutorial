const navToggle = document.querySelector(".nav__toggle");
const menuOpen = document.querySelector(".wrapper");
let openMenu = false;

navToggle.addEventListener("click", function () {
  if (openMenu) {
    navToggle.classList.remove("nav__open-toggle");
    menuOpen.classList.remove("nav-open");
    openMenu = false;
  } else {
    navToggle.classList.add("nav__open-toggle");
    menuOpen.classList.add("nav-open");
    openMenu = true;
  }
});
