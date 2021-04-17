import MediaPlayer from './MediaPlayer.js';
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const buttonPlay = document.getElementById("togglePlay");
const buttonMute = document.getElementById("toggleMute");
const player = new MediaPlayer({ element: video, plugins: [ new AutoPlay() ] });

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();