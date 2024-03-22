const button = document.querySelector("button");
const header = document.querySelector("header");
const video = document.querySelector("video");

button.addEventListener("click", () => {
  header.classList.toggle("pause-play");
  if (header.classList.contains("pause-play")) {
    video.pause();
  } else {
    video.play();
  }
});
