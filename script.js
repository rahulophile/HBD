const music = document.getElementById('music');
const playButton = document.getElementById('playButton');
const stopButton = document.getElementById('stopButton');

playButton.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        this.textContent = 'Pause Music';
    } else {
        music.pause();
        this.textContent = 'Play Music';
    }
});

stopButton.addEventListener('click', function() {
    music.pause();
    music.currentTime = 0; // Reset to the beginning
    playButton.textContent = 'Play Music';
});
