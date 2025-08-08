const minutesBlock = document.querySelector('.js-minutes');
const secondsBlock = document.querySelector('.js-seconds');

let interval;
let minutes = 0;
let seconds = 0;
let timerRunning = false;

const updateDisplay = () => {
    minutesBlock.innerHTML = String(minutes).padStart(2, '0');
    secondsBlock.innerHTML = String(seconds).padStart(2, '0');
};

const startTimer = () => {
    seconds++;

    if (seconds > 59) {
        minutes++;
        seconds = 0;
    }


    if (minutes >= 45) {
        stop();
        minutes = 45;
        seconds = 0; 
    }

    updateDisplay();
};

const start = () => {
    if (!timerRunning) {
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
        timerRunning = true;
    }
};

const stop = () => {
    clearInterval(interval);
    timerRunning = false;
};

const reset = () => {
    stop();
    minutes = 0;
    seconds = 0;
    updateDisplay();
};

start();

function incrementScore(scoreId) {
  let scoreElement = document.getElementById(scoreId);
  let score = parseInt(scoreElement.innerText);
  scoreElement.innerText = score + 1;
}

function decrementScore(scoreId) {
  let scoreElement = document.getElementById(scoreId);
  let score = parseInt(scoreElement.innerText);
  scoreElement.innerText = score - 1;
}