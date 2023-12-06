function setDataHandler() {
  localStorage.setItem("color", "Black");
}

function getDataHandler() {
  let blackColor = localStorage.getItem("color");
  console.log(blackColor);
}

function clearDataHandler() {
  localStorage.clear();
}

//  Use JSON.stringify() & JSON.parse()

function setDataTypeExceptString() {
  localStorage.setItem("id", JSON.stringify(true));
}

function getDataTypeExceptString() {
  let boolean = JSON.parse(localStorage.getItem("id"));
  console.log(typeof boolean, ":", boolean);
}
