// Main differences between Append and AppendChild :

let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let newLiElem = document.createElement("li");
  newLiElem.innerHTML = "Products";
  let ulElem = document.querySelector("ul");
  //   ulElem.append(newLiElem);
  //   ulElem.appendChild(newLiElem);
  //   ulElem.appendChild("Products");
  //   ulElem.append("Products");
  //   let result = ulElem.append(newLiElem);
  //   console.log(result); // undefined
  let result = ulElem.appendChild(newLiElem);
  console.log(result); // Return HTML element
});
