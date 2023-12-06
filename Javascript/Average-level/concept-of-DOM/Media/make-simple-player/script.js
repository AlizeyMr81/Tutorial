const audioElem = document.querySelector("audio");
const pElem = document.querySelector("#time");

let musicSrc = [
  "../../../audio/Lovely Billie Eilish 320 Kbps.mp3",
  "../../../audio/Adele_Hello_320.mp3",
  "../../../audio/exo_love_shot_korean_ver_musicbaran.net_.mp3",
  "../../../audio/Butter Bts 320 Kbps.mp3",
];

let indexMusicSrc = 0;

/*
audioElem.play()

audioElem.pause()

audioElem.duration

audioElem.playbackRate

audioElem.currentTime

*/

function playHandler() {
  audioElem.play();
}

function pauseHandler() {
  audioElem.pause();
}

function musicSpeedHandler() {
  audioElem.playbackRate = 2;
}

function musicSpeedNormalHandler() {
  audioElem.playbackRate = 1;
}

function minusFiveHandler() {
  audioElem.currentTime -= 5;
}

function plusFiveHandler() {
  audioElem.currentTime += 5;
}

function nextMusicHandler() {
  indexMusicSrc++;
  if (indexMusicSrc > musicSrc.length - 1) {
    indexMusicSrc = 0;
  }

  audioElem.src = musicSrc[indexMusicSrc];
  playHandler();
}

function previousMusicHandler() {
  indexMusicSrc--;
  if (indexMusicSrc < 0) {
    indexMusicSrc = 3;
  }

  audioElem.src = musicSrc[indexMusicSrc];
  playHandler();
}
