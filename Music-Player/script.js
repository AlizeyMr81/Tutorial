const preMusic = document.querySelector("#pre-music");
const nexMusic = document.querySelector("#nex-music");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const musicName = document.querySelector(".content__music-name");
const artistName = document.querySelector(".content__artist-name");
const musicCover = document.querySelector(".cover__img");
const audioElem = document.querySelector("audio");
const progress = document.querySelector(".content__time-line");
const backgroundImageBodyElem = document.body;
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const progressContainer = document.querySelector(".content__time-bar");

let songs = [
  {
    path: "audio/Adele_Hello_320.mp3",
    name: "Adele",
    music: "Hello",
    cover: "images/artworks-000153351292-ywkl1g-t500x500.jpg",
  },
  {
    path: "audio/Butter Bts 320 Kbps.mp3",
    name: "BTS",
    music: "Butter",
    cover: "images/BTS_-_Butter.png",
  },
  {
    path: "audio/exo_love_shot_korean_ver_musicbaran.net_.mp3",
    name: "EXO",
    music: "Love Shot",
    cover: "images/artworks-000488691564-6li4hu-t500x500.jpg",
  },
  {
    path: "audio/Lovely Billie Eilish 320 Kbps.mp3",
    name: "Billie Eilis",
    music: "Lovely",
    cover: "images/artworks-gSC8WJ7WYgBjOMY1-ZCYiGw-t500x500.jpg",
  },
  {
    path: "audio/NF - PAID MY DUES.mp3",
    name: "NF",
    music: "PAID MY DUES",
    cover: "images/PAID-MY-DUES.jpg",
  },
  {
    path: "audio/BLACK_SWAN.mp3",
    name: "BTS",
    music: "BLACK SWAN",
    cover: "images/bts-blackswan.jpg",
  },
];

let obj;

// find music
let songsIndex = 0;

function previousMusic() {
  songsIndex--;
  if (songsIndex < 0) {
    songsIndex = songs.length - 1;
  }

  loadSong(songs[songsIndex]);
  playMusic();
  cover();
}

function nextMusic() {
  songsIndex++;
  if (songsIndex > songs.length - 1) {
    songsIndex = 0;
  }

  loadSong(songs[songsIndex]);
  playMusic();
  cover();
}

function cover() {
  musicCover.src = obj.cover;
  musicName.innerHTML = obj.music;
  artistName.innerHTML = obj.name;
  backgroundImageBodyElem.style.backgroundImage = `url(${obj.cover})`;
}

let isPlaying = false;

function playMusic() {
  isPlaying = true;
  audioElem.play();
  play.classList.replace("bi-play", "bi-pause");
}

function pauseMusic() {
  isPlaying = false;
  audioElem.pause();
  play.classList.replace("bi-pause", "bi-play");
}

play.addEventListener("click", function () {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});

function loadSong() {
  obj = songs[songsIndex];
  audioElem.src = obj.path;
  cover();
}

function updateProgressBar(event) {
  const duration = event.target.duration;
  const currentTime = event.target.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = progressPercent + "%";

  // Calculate display for duration
  const durationMinutes = Math.trunc(duration / 60);
  let durationSecond = Math.trunc(duration % 60);
  if (durationSecond < 10) {
    durationSecond = "0" + durationSecond;
  }
  if (durationSecond) {
    durationEl.innerHTML = durationMinutes + ":" + durationSecond;
  }

  // Calculate display for currentTime
  const currentTimeMinutes = Math.trunc(currentTime / 60);
  let currentTimeSeconds = Math.trunc(currentTime % 60);
  if (currentTimeSeconds < 10) {
    currentTimeSeconds = "0" + currentTimeSeconds;
  }
  if (currentTimeSeconds) {
    currentTimeEl.innerHTML = currentTimeMinutes + ":" + currentTimeSeconds;
  }
}

// Set Progress Bar
function setProgressBar(event) {
  const width = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audioElem.duration;
  audioElem.currentTime = (clickX / width) * duration;
}

audioElem.addEventListener("timeupdate", updateProgressBar);
preMusic.addEventListener("click", previousMusic);
nexMusic.addEventListener("click", nextMusic);
progressContainer.addEventListener("click", setProgressBar);
