console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Apna bana le  piya",
    filePath: "Apna Bana Le.mp3",
    coverPath: "ap.jpg.jpg",
  },
  {
    songName: "Sanam teri kasam",
    filePath: "Sanam Teri Kasam.mp3",
    coverPath: "st.jpg.jpg",
  },
  {
    songName: "Subha hone na de",
    filePath: "Subha Hone Na De.mp3",
    coverPath: "sh.jpg.jpg",
  },
  {
    songName: "Tera ban jaunga",
    filePath: "Tera Ban Jaunga.mp3",
    coverPath: "tb.jpg.jpg",
  },
  { songName: "beedi", filePath: "Beedi.mp3", coverPath: "bg.jpg.jpg" },
  { songName: "salame-e-ishq", filePath: "Beedi.mp3", coverPath: "bg.jpg.jpg" },
];
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value / 100) * audioElement.duration;
});

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      e.target.classList;
    });
  }
);
