let $ = document;

const h1Elem = $.querySelector("#title");

// h1Elem.style.width = "330px";
// h1Elem.style.height = "330px";
// h1Elem.style.backgroundColor = "aqua";
// h1Elem.style.display = "flex";
// h1Elem.style.alignItems = "center";
// h1Elem.style.justifyContent = "center";

h1Elem.style.cssText =
  "width:330px; height:330px; background-color:aqua; display:flex; align-items:center; justify-content:center";
