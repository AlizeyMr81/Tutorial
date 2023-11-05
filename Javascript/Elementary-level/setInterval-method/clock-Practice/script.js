// یک تایمر پیاده سازی کنید

// به طوری که از کاربر میزان ثانیه و دقیقه را دریافت کرده و تایمری را با اطلاعات وارد شده استارت بزنید

// و زمانی که تایمر تمام شد، پیغام مناسبی نمایش داده شود

let userMinutes = +prompt("Enter your minutes");
let userSeconde = +prompt("Enter your seconde");

let timer = setInterval(function () {
  console.log(userMinutes + ":" + userSeconde);

  if (userMinutes === 0 && userSeconde === 0) {
    clearInterval(timer);
    alert("Time out");
  } else if (userSeconde === 0) {
    userSeconde = 60;
    userMinutes--;
  } else if (isNaN(userMinutes) || isNaN(userSeconde)) {
    alert("The entered values are not valid");

    clearInterval(timer);
  }

  userSeconde--;
}, 1000);

