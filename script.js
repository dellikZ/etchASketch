
function createGrid() {
    for(let i = 0; i < 16; i++) {
        const container = document.getElementById('squares-container');
    let jump = document.createElement('br');
    for(let i = 0; i < 16; i++) {
        let square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    }
    container.appendChild(jump);
    }

}

createGrid();
const squares = document.querySelectorAll('.square');

for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = 'blue';
    })
}