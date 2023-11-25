let min = +prompt("Enter the Minutes");
let sec = +prompt("Enter the Secondes");

let timer = setInterval(function () {
  if (sec === -1) {
    min--;
    sec = 59;
  }
  if (min === 0 && sec === 0) {
    clearInterval(timer);
  }
  if (min < 10 && String(min).indexOf("0")!== 0) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  console.log(min + ":" + sec);

  sec--;
}, 1000);
