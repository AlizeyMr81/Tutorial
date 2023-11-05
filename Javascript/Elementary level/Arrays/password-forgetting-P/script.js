// فرض کنید در سامانه ای که راه اندازی کرده اید، کاربری پسوردش رو فراموش کرده
// و شما از کاربر یوزرنیم رو میگیرین و پسوردش رو بهش نمایش میدین
// اگر کاربری با یوزرنیم وارد شده در دیتابیس شما وجود نداشت، به کاربر پیغام متناسب را نمایش دهید

let userName = prompt("Enter your user name");

let users = [
  { id: 1, userName: "AlizeyMr", password: 1236 },
  { id: 2, userName: "RezaDif", password: 6584631 },
  { id: 3, userName: "sunrise", password: 78214625 },
  { id: 4, userName: "AmirKing", password: "123@king.Amir" },
  { id: 5, userName: "mohammad81", password: 859741322 },
  { id: 6, userName: "Saraflower", password: "flower14@#SarA" },
];

let findUserPassword = users.find(function (user) {
  return user.userName === userName;
});

if (findUserPassword === undefined) {
  alert("There is not this user name");
} else {
  alert("Your user name : " + findUserPassword.password);
}
