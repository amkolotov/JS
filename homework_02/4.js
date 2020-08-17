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

let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));   
let command = prompt('Введите знак операции (+, -, *, /)');

if (command == '+') {
    alert('Сумма чисел равна: ' + getSum(a, b));
} else if (command == '-') {
    alert('Разность чисел равна: ' + getDiff(a, b));
} else if (command == '*') {
    alert('Произведение чисел равно: ' + getMult(a, b));
} else {
    alert('Отношение чисел равно: ' + getDiv(a, b));
}