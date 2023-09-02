const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menuMobile = document.querySelector(".nav__mobile");
const cover = document.querySelector(".cover");
const conditionItems = document.querySelectorAll(".condition__item");
navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menuMobile.classList.toggle("nav__mobile--open");
  cover.classList.toggle("cover--show");
});

conditionItems.forEach((conditionItem) => {
  conditionItem.addEventListener("click", function () {
    document
      .querySelector(".condition__item--active")
      .classList.remove("condition__item--active");
    document
      .querySelector(".resume-sample--show")
      .classList.remove("resume-sample--show");
    this.classList.add("condition__item--active");
    let contentId = this.getAttribute("data-content-id");
    document.querySelector(contentId).classList.add("resume-sample--show");
  });
});
