let $ = document;

const titleInput = $.querySelector("#title");
const authorInput = $.querySelector("#author");
const yearInput = $.querySelector("#year");
const submitInput = $.querySelector(".btn");
const bookList = $.querySelector("#book-list");
const formElem = $.querySelector("#book-form");
const divTheme = $.querySelector(".theme");
const iconTheme = $.querySelector(".bi");

let changeTheme = false;

let arrBookList = [];

function makeEmptyInput() {
  titleInput.value = "";
  authorInput.value = "";
  year.value = "";

  titleInput.focus();
}

function addDataToLocalStorage(arrItems) {
  localStorage.setItem("BookList", JSON.stringify(arrItems));
}

function addBookList(event) {
  event.preventDefault();

  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    year.value === ""
  ) {
    alert("Please write information");
  } else {
    let objBookList = {
      title: titleInput.value,
      author: authorInput.value,
      year: year.value,
    };

    arrBookList.push(objBookList);
    makeEmptyInput();
  }

  addDataToLocalStorage(arrBookList);
  createElement(arrBookList);
}

function createElement(itemsOfBookListArr) {
  bookList.innerHTML = "";

  itemsOfBookListArr.forEach(function (items) {
    let trElem = $.createElement("tr");

    let bookName = $.createElement("th");
    bookName.innerHTML = items.title;

    let bookAuthor = $.createElement("th");
    bookAuthor.innerHTML = items.author;

    let bookYear = $.createElement("th");
    bookYear.innerHTML = items.year;

    trElem.append(bookName, bookAuthor, bookYear);

    bookList.append(trElem);
  });
}

divTheme.addEventListener("click", function (event) {
  let iconTheme = event.target;

  if (changeTheme) {
    iconTheme.classList.remove("bi-brightness-high");
    iconTheme.classList.add("bi-moon");
    document.documentElement.style.setProperty("--color-them", "#fff");
    localStorage.setItem("colorTheme", "#fff");
    localStorage.setItem("IconTheme", "bi-moon");

    changeTheme = false;
  } else {
    iconTheme.classList.remove("bi-moon");
    iconTheme.classList.add("bi-brightness-high");
    document.documentElement.style.setProperty("--color-them", "#616161");
    localStorage.setItem("colorTheme", "#616161");
    localStorage.setItem("IconTheme", "bi-brightness-high");
    changeTheme = true;
  }
});

submitInput.addEventListener("click", addBookList);

window.addEventListener("load", function () {
  let getBookListLocalStorage = JSON.parse(localStorage.getItem("BookList"));
  let getColorThemeLocalStorage = localStorage.getItem("colorTheme");
  let getIconThemeLocalStorage = localStorage.getItem("IconTheme");

  if (getBookListLocalStorage) {
    arrBookList = getBookListLocalStorage;
    createElement(arrBookList);
  }

  if (getColorThemeLocalStorage) {
    document.documentElement.style.setProperty(
      "--color-them",
      getColorThemeLocalStorage
    );
    iconTheme.classList.add(getIconThemeLocalStorage);
  }
});
