const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 15000
const breatheTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breatheAnimation()

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

var myInterval = setInterval(breatheAnimation, totalTime);

var piano = new Audio();
var isPlaying = false;
piano.src = "piano-music.mp3";

function play(el) {
    piano.play();
    el.classList.toggle("fa-pause");
    if (isPlaying) {
        piano.pause();
        ball.style.animationPlayState = "paused";
    } else {
        piano.play();
        ball.style.animation = "rotate 15s linear forwards infinite";
        text.innerHTML = display;
    }

}

piano.onplaying = function() {
    isPlaying = true;

};
piano.onpause = function() {
    isPlaying = false;
};