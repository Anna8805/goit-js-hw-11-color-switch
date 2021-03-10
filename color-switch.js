
// Переключатель цветов

// Есть массив цветов в hex-формате и кнопки Start и Stop.

// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона
// body на случайное значение из массива используя инлайн - стиль.
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

//     ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. 
// Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа (индекс элемента массива цветов), 
// используй функцию randomIntegerFromInterval.


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    bodyRef: document.querySelector('body'),
    startBtnRef: document.querySelector('[data-action="start"]'),
    stopBtnRef: document.querySelector('[data-action="stop"]'),
}

// const onClick = () => console.log('Click');
// refs.startBtnRef.addEventListener('click', onClick);
refs.startBtnRef.addEventListener('click', onStartClick);
refs.stopBtnRef.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let interval = null;

function onStartClick() {
  refs.startBtnRef.disabled = true;
  interval = setInterval(() => {
    let showRandomColor = randomIntegerFromInterval(1, colors.length);
    refs.bodyRef.style.backgroundColor = colors[showRandomColor];
  }, 1000);
};

function onStopClick() {
  refs.startBtnRef.disabled = false;
  clearInterval(interval);
};