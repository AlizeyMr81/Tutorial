const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menuMobile = document.querySelector(".nav__mobile");
const cover = document.querySelector(".cover");
const conditionItems = document.querySelectorAll(".condition__item");
const portfolioListItems = document.querySelectorAll(".list-portfolio__item");
const menuItems = document.querySelectorAll(".menu__item");

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
      removeActiveClass(ListItemActiveClass);
      removeActiveClass(contentItemShowClass);
      this.classList.add(ListItemActiveClass);
      let contentId = this.getAttribute("data-content-id");
      document.querySelector(contentId).classList.add(contentItemShowClass);
    });
  });
}
function removeActiveClass(ClassName) {
  document.querySelector(`.${ClassName}`).classList.remove(ClassName);
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



menuItems.forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault()
    removeActiveClass('menu__item--active')
    item.classList.add("menu__item--active")
    let sectionClass = item.getAttribute("data-section")
    let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop


    window.scrollTo({
      top:sectionOffsetTop -120,
      behavior : "smooth"
        })
  })
})