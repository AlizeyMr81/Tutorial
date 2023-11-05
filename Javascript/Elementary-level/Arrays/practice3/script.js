// فرض کنید پلتفرمی مثل تلگرام ساخته اید و چند نفر در آن یک گروه ایجاد کردند
// و قصد ایجاد تماس کنفرانسی دارند

// اما شرط لازم برای ایجاد تماس کنفرانسی بالای 18 سال بودن اعضای گروه است
// اگر تمامی اعضا بالای 18 سال نبودند، اجازه ایجاد تماس کنفرانسی را ندهید

let userInfo = [
  { id: 1, name: "John", age: 24 },
  { id: 2, name: "Michel", age: 31 },
  { id: 3, name: "Row", age: 29 },
  { id: 4, name: "Jack", age: 22 },
  { id: 5, name: "Jones", age: 48 },
  { id: 6, name: "Arnold", age: 34 },
  { id: 7, name: "Sara", age: 26 },
  { id: 8, name: "Amir", age: 40 },
];

let isAllow = userInfo.every(function (userAge) {
  return userAge.age > 18;
});

if (isAllow === true) {
  console.log("You can create a conference call");
} else {
  console.log("You can not create a conference call");
}
