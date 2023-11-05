// some()

/* syntax : array.some(function() {
    //code
})
*/

let userData = [
  { id: 1, name: "Alireza", age: 21 },
  { id: 2, name: "Amir", age: 28 },
  { id: 3, name: "Amin", age: 34 },
];

let isLogin = userData.some(function (user) {
  console.log(user);
  return user.name == "Amir";
});

console.log(isLogin);
