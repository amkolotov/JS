'use strict';

let number = prompt('Введите сумму для пополнения счета');
let str = String(number);
let strLast = str.charAt(str.length - 1);
let strPenalt = str.charAt(str.length - 2);

if (strPenalt == '1') {
    alert(`Ваша сумма в ${number} рублей успешно зачислена`);
} else if (strLast == '1') {
    alert(`Ваша сумма в ${number} рубль успешно зачислена`)
} else if (strLast == '2' || strLast == '3' || strLast == '4') {
    alert(`Ваша сумма ${number} рубля успешно зачислена`);
} else {
    alert(`Ваша сумма в ${number} рублей успешно зачислена`);
}