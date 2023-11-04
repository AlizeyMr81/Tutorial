// فرض کنید سامانه‌ای پیاده سازی کرده اید که وقتی کاربر وارد سایت می شود، 5 ثانیه فرصت دارد عکسی را
// برای پروفایل خود انتخاب کند، در غیر این صورت بهش یه پیغام برای آپلود عکس نمایش میدیم

// راهنمایی
// یه متغیر بولین در نظر بگیرین و طبق مقدار همین متغیر بعد از 5 ثانیه چک کنین که
// true
// هست یا
// false
// و طبق نتیجه، پیغام لازم را نمایش دهید

let hasProfilePhoto= prompt("You have 5 seconds to upload your photo"); // simulation

setTimeout(function () {
  if (!userProfile) {
    alert("The photo could not be uploaded");
  } else {
    alert("Photo uploaded");
  }
}, 5000);
