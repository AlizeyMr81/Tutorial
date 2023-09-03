const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menuMobile = document.querySelector(".nav__mobile");
const cover = document.querySelector(".cover");
const conditionItems = document.querySelectorAll(".condition__item");
const portfolioListItems = document.querySelectorAll(".list-portfolio__item");
navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menuMobile.classList.toggle("nav__mobile--open");
  cover.classList.toggle("cover--show");
});
function navigationTabsInit(
  ListItems,
  ListItemActiveClass,
  contentItemShowClass
) {
  ListItems.forEach((ListItem) => {
    ListItem.addEventListener("click", function () {
      document
        .querySelector(`.${ListItemActiveClass}`)
        .classList.remove(ListItemActiveClass);
      document
        .querySelector(`.${contentItemShowClass}`)
        .classList.remove(contentItemShowClass);
      this.classList.add(ListItemActiveClass);
      let contentId = this.getAttribute("data-content-id");
      document.querySelector(contentId).classList.add(contentItemShowClass);
    });
  });
}
navigationTabsInit(
  conditionItems,
  "condition__item--active",
  "resume-sample--show"
);
navigationTabsInit(
  portfolioListItems,
  "list-portfolio__item--active",
  "portfolio-content--show"
);
