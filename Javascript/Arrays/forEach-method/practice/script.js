// دیتابیسی برای ذخیره اطلاعات کاربران داشته باشید (آرایه ای از آبجکت ها)
// و سپس به کمک متد فورایچ، اطلاعات هر یوزر را به صورت جداگانه در کنسول نمایش دهید

let usersInfo = [
  { id: 1, name: "Alireza", family: "Zeighampour", age: 21 },
  { id: 2, name: "john", family: "Smith", age: 32 },
  { id: 3, name: "Sara", family: "Gomez", age: 64 },
  { id: 4, name: "Jack", family: "Walker", age: 41 },
  { id: 5, name: "Mohammad", family: "Rodriguez", age: 28 },
];

usersInfo.forEach(function (usersInfo) {
  console.log("Name : " + usersInfo.name + "\n" + "Family : " + usersInfo.family);
});
 