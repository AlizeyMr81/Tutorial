// یک سیستم لاگین پیاده سازی کنید
// به این صورت که از کاربر یوزرنیم رو میگیرین و چک می کنین لاگین هست یا نه
// فقط کاربر با یوزرنیم
// ali
// میتونه لاگین کنه

// نکته: این پروژه نباید به حروف کوچیک و بزرگ حساب باشد

let userName = prompt("Enter your username :");

if (!userName.search(/ali/i)) {
  alert("You can login in site");
} else {
  alert("You cannot login in site");
}

