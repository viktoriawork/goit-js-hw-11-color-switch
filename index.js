const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
};

let timerId = null;

refs.btnStart.addEventListener('click', onClickStartBtn);
refs.btnStop.addEventListener('click', onClickStopBtn);

// генерация случайного числа
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// генерация фонового цвета
function randomBackgroundColor(array) {
    const index = randomIntegerFromInterval(0, array.length - 1);
    document.body.style.backgroundColor = array[index];
}

// Старт и запуск таймера
function onClickStartBtn(event) {
    timerId = setInterval(() => {
        randomBackgroundColor(colors);
    }, 1000);
    refs.btnStart.disabled = true;
};

// Стоп и остановка таймера
function onClickStopBtn(event) {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
};





