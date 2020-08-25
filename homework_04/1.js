'use strict'

class NumObject {
    constructor (units, tens, hundreds) {
        this.units = units;
        this.tens = tens;
        this.hundreds = hundreds;
    }
}

function create_object(number) {
    number = Number(number);
    let check = check_object(number);
    if (!check) {
        let units = number % 10;
        number = Math.floor(number / 10);
        let tens = number % 10;
        let hundreds = Math.floor(number / 10);
        return new NumObject(units, tens, hundreds);
    } else {
        return check;
    }
}

function check_object(number){
    if (Number.isNaN(number)) {
        return 'Необходимо ввести число';
    } else if (!Number.isInteger(number)) {
        return 'Необходимо ввести целое число';
    } if (number < 0 || number > 999) {
        return 'Число должно быть в диапазоне от 0 до 999 включительно';
    } else {
        return;
    }
 }

let number = prompt('Введите целое число от 0 до 999 включительно');

console.log(create_object(number));