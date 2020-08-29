'use strict'

let wind = document.querySelector('div');
let button = document.querySelector('button');

button.addEventListener('click', function (event) {
    if (button.innerText === 'Скрыть окно') {
        wind.style.display = "none";
        button.innerText = 'Показать окно'
    } else {
        wind.style.display = "block";
        button.innerText = 'Скрыть окно'
    }
});
