// یک فرم لاگین پیاده سازی کنید که از 2 اینپوت و 1 دکمه تشکیل شده باشد

// به محض کلیک روی دکمه فرم، ولیوی اینپوت‌ها بررسی شوند و اگر با محدودیت های لازم مطابقت نداشتند، به کاربر پیغام خطا نمایش دهید و در غیر این صورت پیغام مناسبی را نمایش دهید

// اینپوت یوزرنیم حداقل باید 12 کاراکتر و اینپوت پسورد حداقل باید 8 کاراکتر داشته باشد

// نکته: برای خوشگل‌تر شدن پروژه، برای نمایش پیغام های مورد نیاز به جای آلرت از مُدال استفاده کنید

let inputsElem = document.getElementsByClassName("input");
let btnForm = document.getElementById("btn");
let divElem = document.querySelector(".wrapper");

function checkFormInputs() {
  let usernameValue = inputsElem[0].value;
  let passwordValue = inputsElem[1].value;

  if (usernameValue.length < 12 || passwordValue.length < 8) {
    divElem.style.opacity = "1";
    divElem.innerHTML = "لطفا اطلاعات را به درستی وارد کنید";
    divElem.style.background = "#e53935";
  } else {
    divElem.style.background = "#43A047";
    divElem.style.opacity = "1";
    divElem.innerHTML = "ورود با موفقیت انجام شد";
  }
  setTimeout(function () {
    divElem.style.opacity = "0";
  }, 3000);
}
