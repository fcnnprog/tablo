let interval;
    let minutes = 0;
    let seconds = 0;
    let timerRunning = false;
    let initialMinutes = 45;

    const minutesBlock = document.querySelector('.js-minutes');
    const secondsBlock = document.querySelector('.js-seconds');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');
    const setInitialButton = document.getElementById('set-45min');

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

      updateDisplay();

      if ((initialMinutes === 0 && minutes >= 45) || (initialMinutes === 45 && minutes >= 90)) {
        stop();
      }
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
      initialMinutes = 0; 
      updateDisplay();
    };

    const setInitial = () => {
      stop();
      initialMinutes = 45; 
      minutes = initialMinutes;
      seconds = 0;
      updateDisplay();
    }

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
    resetButton.addEventListener('click', reset);
    setInitialButton.addEventListener('click', setInitial);

    updateDisplay();

const escore1Element = document.querySelector('.escore1');
const escore2Element = document.querySelector('.escore2');

    const incrementButton = document.getElementById('incrementButton');
    const decrementButton = document.getElementById('decrementButton');

    const incrementButton2 = document.getElementById('incrementButton2');
    const decrementButton2 = document.getElementById('decrementButton2');

    let currentValue = 0;

    let currentValue2 = 0;

    function updateEscore1() {
      escore1Element.textContent = currentValue;
    }

    function updateEscore2() {
      escore2Element.textContent = currentValue2;
    }

    incrementButton.addEventListener('click', () => {
      currentValue++;
      updateEscore1();
    });

    decrementButton.addEventListener('click', () => {
      currentValue--;
      updateEscore1();
    });

    updateEscore1();

    incrementButton2.addEventListener('click', () => {
      currentValue2++;
      updateEscore2();
    });

    decrementButton2.addEventListener('click', () => {
      currentValue2--;
      updateEscore2();
    });

    updateEscore2();
