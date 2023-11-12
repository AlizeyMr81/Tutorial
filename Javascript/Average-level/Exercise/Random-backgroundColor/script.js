// یک صفحه با یک متن دلخواه داشته باشید (متن در وسط صفحه)
// و سپس بک گراند بادی را هر 5 ثانیه یک بار به صورت رندوم تغییر بدید

setInterval(function () {
  let redValue = Math.trunc(Math.random() * 255);
  let greenValue = Math.trunc(Math.random() * 255);
  let blueValue = Math.trunc(Math.random() * 255);
  document.body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
}, 1000);
