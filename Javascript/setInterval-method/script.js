// setInterval()

// syntax : setInterval(function () {}, 1000)

let number = 10;
let timer = setInterval(function () {
  console.log(number);
  if (number === 0) {
    clearInterval(timer);
    alert("Time out");
  }
  number--;
}, 1000);
