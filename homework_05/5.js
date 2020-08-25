'use strict'
let rows = [8, 7, 6, 5, 4, 3, 2, 1]
let columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function createBoard() {
    let board = "";
    let color = "black";
    for (let i = 0; i < rows.length + 1; i++) {
        if (i == 0) {
            board += createFirstRow(board);
        } else {
            color = changeColor(color);
            for (let j = 0; j < columns.length + 1; j++) {
                if (j == 0) {
                    board += `<div>${rows[i - 1]}</div>`;
                } else {
                    board += `<div class="${color}"></div>`;
                    color = changeColor(color);
                }
            }
        }
    }
    document.body.innerHTML = board;
}
function changeColor(color) {
    if (color == 'white') {
        return 'black';
    }
    return 'white';
}

function createFirstRow(board) {
    for (let i = 0; i < columns.length + 1; i++) {
        if (i == 0) {
            board += `<div></div>`;
        } else {
            board += `<div>${columns[i - 1]}</div>`;
        }
    }
    return board
}

createBoard()

