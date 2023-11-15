const btn = document.querySelector("#btn");

function removeClick() {
  console.log("Click");
}

// btn.addEventListener("click", removeClick);

/////////////////////////////////////////////////////////////

// btn.onclick = removeClick;

// Or :

btn.onclick = function () {
  console.log("Click");
};
