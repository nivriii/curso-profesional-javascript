function MediaPlayer(config) {
    this.media = config.element;
}

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.play() : this.pause();
};
const video = document.querySelector("video");
const button = document.querySelector("button");
const player = new MediaPlayer({ element: video });

button.onclick = () => player.togglePlay();