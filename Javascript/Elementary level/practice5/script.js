// یک زمان را بر حسب دقیقه از کاربر دریافت کرده و آن را به ساعت تبدیل کنید و سپس نمایش دهید

let minutes = prompt("Enter the hour in minutes", "90 minutes");

let minutesTOHour = minutes / 60;

if (isNaN(minutesTOHour)) {
  alert("The entered value is not correct");
} else {
  alert(minutesTOHour + " hour");
}
