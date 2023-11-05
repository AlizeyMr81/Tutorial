// includes(element, start) return => true OR false

let userName = prompt("Write your user Name");
let userinfo = ["Ali", "Amir", "Mohammad", "Amin"];

let isLogin = userinfo.includes(userName);

if (isLogin === true) {
  console.log("You can enter your panel");
} else {
  console.log("You must register");
}
