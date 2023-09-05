const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menu = document.querySelector(".menu");
const cover = document.querySelector(".cover");
const conditionItems = document.querySelectorAll(".condition__item");
const portfolioListItems = document.querySelectorAll(".list-portfolio__item");
const menuItems = document.querySelectorAll(".menu__item");
const sections = document.querySelectorAll("main > section");
navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menu.classList.toggle("menu--open");
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
function removeActiveClass(className) {
  document.querySelector(`.${className}`).classList.remove(className)
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

const observer = new IntersectionObserver(observerHandler, {
  threshold: 0.3,
});
function observerHandler(allSections) {
  allSections.map((section) => {
    let sectionClassName = section.target.className;
    if (section.isIntersecting) {
      document
        .querySelector(`.menu__item[data-section=${sectionClassName}]`)
        .classList.add("menu__item--active");
    } else {
      document
        .querySelector(`.menu__item[data-section=${sectionClassName}]`)
        .classList.remove("menu__item--active");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

menuItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    removeActiveClass("menu__item--active");
    item.classList.add("menu__item--active");
    let sectionClass = item.getAttribute("data-section");
    let sectionOffsetTop = document.querySelector(`.${sectionClass}`).offsetTop;

    window.scrollTo({
      top: sectionOffsetTop - 120,
      behavior: "smooth",
    });
  });
});
