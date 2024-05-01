const blocks = document.querySelector(".randomColor");
    blocks.style.width = '100px';
    blocks.style.height = '100px';


function ranCol() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomColor() {
    blocks.addEventListener('click', function() {
        blocks.style.backgroundColor = ranCol();
        if (ranCol().includes('f')) {
            alert('You win!');
        }
    });
}

randomColor();