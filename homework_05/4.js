'use strict'

let buttons = document.querySelectorAll('button')

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        showDescription(event);
    })
});

function showDescription(event) {
    let parent = event.target.parentNode;  
    let description = parent.querySelector('.description');
    let image = parent.querySelector('img');
    let button = parent.querySelector('button');
    
    if (button.innerText === 'Подробнее') {
        description.style.display = 'block';
        image.style.display = 'none';
        button.innerText = 'Отмена';
    } else {
        description.style.display = 'none';
        image.style.display = 'block';
        button.innerText = 'Подробнее';
    }
}