'use strict'
let rows = [8, 7, 6, 5, 4, 3, 2, 1]
let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function createBoard() {
    let board = "";
    let rowStartWithColor = 'white';
    for (let i = 0; i < 64; i++) {
        let row = "";
        if (rowStartWithColor == 'white') {
            row = generateRow(rowStartWithColor, rows[i]);
            rowStartWithColor = 'black';
        } else {
            row = generateRow(rowStartWithColor, config.rows[i]);
            rowStartWithColor = 'white';
        }
        board += row;
    }
    return `<table>${board}</table>`;
}

function generateRow(startWithColor, rowNum) {
    let currentColorClass = startWithColor;
    let row = "";
    for (let i = 0; i < cols.length; i++) {
        let field = "";
        if (currentColorClass === 'white') {
            field = generateField('white');
            currentColorClass = 'blackField';
        } else {
            field = generateField('black';
            currentColorClass = 'white';
        }
        row += field;
    }
    return `<tr>${row}</tr>`;
},

function generateField(color) {
    return `<td class="${color}"></td>`;
},

function insertRowsNumbers() {
    let trs = document.querySelectorAll('tr');
    for (let i = 0; i < trs.length; i++) {
        let td = document.createElement('td');
        td.innerText = rows[i];
        trs[i].insertAdjacentElement("afterbegin", td);
    }
}

function insertColsChars() {
    let tr = document.createElement('tr');
    tr.innerHTML += '<td></td>';
    for (let i = 0; i < cols.length; i++) {
        tr.innerHTML += `<td>${cols[i]}</td>`;
    }
    let tbody = document.querySelector('tbody');
    tbody.insertAdjacentElement("beforeend", tr);
}

createBoard()