const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menuMobile = document.querySelector(".nav__mobile");
const cover = document.querySelector(".cover");

navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menuMobile.classList.toggle("nav__mobile--open");
  cover.classList.toggle("cover--show");
});
