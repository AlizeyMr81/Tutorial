// یک برنامه ثبت نام بنویسید

// به این شکل که کاربر برای ثبت نام در سایت باید یوزرنیم و پسورد را ثبت کند

// محدودیت موجود این است که یوزرنیم حداقل باید 3 کاراکتر و پسورد حداقل باید 8 کاراکتر داشته باشد

// در غیر این صورت پیغام مناسب را به کاربر نمایش دهید

// (: موفق باشید

let userName = prompt("Enter your user name", "John91");

if (userName.length >= 3) {
  let password = prompt("Enter your password");
  if (password.length >= 8) {
    alert("You have successfully entered the site");
  } else {
    alert("Password must have at least eight characters");
  }
} else {
  alert("Username must have at least three characters ");
}


////////////////////////////////////// Or use whit function :

// function registerSite(userName, password) {
//   if (userName.length >= 3) {
//     password();
//   }
// }

// function passwordUser() {
//   let password = prompt("Enter your password");
//   if (password.length >= 8) {
//     alert("You have successfully entered the site");
//   }
// }

// registerSite(prompt("Enter your user name", "John91"), passwordUser);
