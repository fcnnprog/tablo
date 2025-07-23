const minutesBlock = document.querySelector('.js-minutes');
const secondsBlock = document.querySelector('.js-seconds');

let interval;
let minutes = 105;
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

    // Проверяем, не достигли ли 90 минут
    if (minutes >= 120) {
        stop(); // Останавливаем таймер
        minutes = 120; // Гарантируем, что минуты будут ровно 90
        seconds = 0; // Сбрасываем секунды
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

// Запускаем таймер при загрузке страницы:
start();