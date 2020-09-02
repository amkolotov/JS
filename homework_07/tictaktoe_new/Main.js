"use strict";


window.addEventListener('load', () => {
    const status = new Status();
    const field = new Field();
    const game = new Game();

    game.init(field, status);

    field.renderMap();
    game.run();
});

