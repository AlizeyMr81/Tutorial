// filter()

/*
syntax :

array.filter(function() {
    //code
})

*/

let userName = ["John", "Row", "Kane", "Mir"];

let filteredUserName = userName.filter(function (userName) {
  return userName.length > 3;
});

console.log("filteredUserName : " , filteredUserName);
