const audioElem = document.querySelector("audio");
const pElem = document.querySelector("#time");

/*
audioElem.play()

audioElem.pause()

audioElem.duration

audioElem.playbackRate

audioElem.currentTime

*/

function playHandler() {
  let seconde = 0;
  let timer = 0;
  let flag = true;
  audioElem.play();
  setInterval(function () {
    if (flag) {
      timer = Math.trunc(audioElem.currentTime);
    }

    if (timer >= 9) {
      timer++;
      pElem.innerHTML = "0" + seconde + ":" + timer;
    } else {
      timer++;
      pElem.innerHTML = "0" + seconde + ":" + "0" + timer;
    }

    if (timer === 60) {
      timer = 0;
      seconde++;
      pElem.innerHTML = "0" + seconde + ":" + "0" + timer;
      flag = false;
    }
  }, 1000);
}

function pauseHandler() {
  audioElem.pause();
}

function durationHandler() {
  console.log("duration : ", audioElem.duration);
}

function musicSpeedHandler() {
  audioElem.playbackRate = 2;
}

function musicSpeedNormalHandler() {
  audioElem.playbackRate = 1;
}

function currentTimeHandler() {
  console.log("current Time : ", audioElem.currentTime);
}
