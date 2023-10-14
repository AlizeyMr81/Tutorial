// یک سامانه ثبت نام پیاده سازی کنید

// به این شکل که یک آرایه برای ذخیره اطلاعات کاربران داشته باشید (3 کاربر را بطور دیفالت در آرایه داشته باشید)
// و از کاربری که قصد ثبت نام دارد نام، نام خانوادگی، سن و ایمیل را دریافت کرده
// و داخل آبجکتی مجزا در آرایه کاربران ذخیره کنید
// پس از انجام عمل ثبت نام، اطلالاعات تک تک کاربران را لاگ بگیرید

// :نکات قابل توجه
// نام حداقل باید 3 کاراکتر و حداکثر 10 کاراکتر داشته باشد
// نام خانوادگی حداقل باید 3 کاراکتر و حداکثر باید 15 کاراکتر داشته باشد
// سن حتما باید عدد بوده و حداکثر 3 رقم باشد

let users = [
  { id: 1, name: "john", family: "bolton", age: 40, email: "john@gmail.com" },
  { id: 2, name: "jack", family: "walker", age: 18, email: "jack@gmail.com" },
  { id: 3, name: "sara", family: "white", age: 20, email: "sara@gmail.com" },
];

let userName = prompt("Enter your name");
let userFamily = prompt("Enter your family");
let userAge = +prompt("Enter your age");
let userEmail = prompt("Enter your gmail");

if (userName.length < 3 || userName.length > 10) {
  alert("Please Enter your Name correctly ");
} else if (userFamily.length < 3 || userFamily.length > 15) {
  alert("Please Enter your Family correctly");
} else if (isNaN(userAge)) {
  alert("Enter your Age correctly");
} else {
  let newUsers = {
    id: 4,
    name: userName,
    family: userFamily,
    age: userAge,
    email: userEmail,
  };

  users.push(newUsers);
  
  console.log(users);
}
