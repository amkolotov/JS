'use strict';

function getSum(a, b) {
    return (a + b);
}

function getDiff(a, b) {
    return (a - b);
}

function getMult(a, b) {
    return (a * b);
}

function getDiv(a, b) {
    return (a / b)
}

function mathOperation(a, b, sign){
    switch (sign){
        case '+':
            return 'Сумма чисел равна: ' + (getSum(a, b));
        case '-':
            return 'Разность чисел равна: ' + (getDiff(a, b));
        case '*':
            return 'Произведение чисел равно: ' + (getMult(a, b));
        case '/':
            return 'Отношение чисел равно: ' + (getDiv(a, b))
        default:
            return 'Введен некорректный знак операции';
    }
}

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
let sign = prompt('Введите знак операции (+, -, *, /)');

alert(mathOperation(a, b, sign));