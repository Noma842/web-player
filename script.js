const audioPlayer = document.getElementById('audio-player');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

playButton.addEventListener('click', () => {
  audioPlayer.play();
});

pauseButton.addEventListener('click', () => {
  audioPlayer.pause();
});


