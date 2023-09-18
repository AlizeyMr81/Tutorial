// تاریخ تولد کاربر رو بگیر و سپس سن کاربر را محاسبه کرده و نمایش دهید

let userBirthday = prompt("Year of Birth ", "2002");

let userAge = 2023 - userBirthday;
if (isNaN(userAge)) {
  alert("Date of birth entered is not valid");
} else if (userBirthday > 2023) {
  alert("Not available");
} else {
  alert("Your age is : " + userAge);
}
