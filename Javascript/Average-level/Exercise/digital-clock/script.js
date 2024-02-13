const divHour = document.querySelector("#hour");
const divMinute = document.querySelector("#minute");
const divSecond = document.querySelector("#seconds");

setInterval(function () {
  let dateObject = new Date();

  let hourValue = dateObject.getHours();
  let minutesValue = dateObject.getMinutes();
  let secondValue = dateObject.getSeconds();

  if (hourValue < 10) {
    hourValue = "0" + hourValue;
  }

  if (minutesValue < 10) {
    minutesValue = "0" + minutesValue;
  }

  if (secondValue < 10) {
    secondValue = "0" + secondValue;
  }

  divHour.innerHTML = hourValue;
  divMinute.innerHTML = minutesValue;
  divSecond.innerHTML = secondValue;
}, 1000);
