let $ = document;
const play = $.querySelectorAll(".fa");
const audioElem = $.querySelectorAll("audio");
let dataName;

play.forEach(function (item) {
  item.addEventListener("click", function (event) {
    dataName = event.target.dataset.name;

    audioElem.forEach(function (musics) {
      if (musics.dataset.name === dataName) {
        musics.play();
      } else {
        musics.pause();
        musics.currentTime = 0;
      }
    });
  });
});
