
function createGrid(dim) {
    for(let i = 0; i < dim; i++) {
        const container = document.getElementById('squares-container');
        let jump = document.createElement('br');
        let squares = document.createElement('div');
        squares.className = 'lotOfSquares'
        for(let i = 0; i < dim; i++) {
            let square = document.createElement('div');
            square.className = 'square';
            squares.appendChild(square);
            container.appendChild(squares);
            let height = 600 / dim;
            square.style.height = `${height}px`;
            let width = 600 / dim;
            square.style.width = `${width}px`;
        }
        container.appendChild(jump);
    }

}

function deleteGrid() {
    let container = document.getElementById('squares-container');
    container.innerHTML = '';
}



createGrid(16);

let squares = document.querySelectorAll('.square');
const clearGrid = document.getElementById('clear-grid');
const resizeButton = document.getElementById('resize-button');
const container = document.getElementById('squares-container');





for(let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseover', () => {
        squares[i].style.backgroundColor = '#123171';
        
    })
}


clearGrid.addEventListener('click', () => {
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = '#F5F5F5';
    }
})

resizeButton.addEventListener('click', () => {
    let squareNum = prompt('Enter the number of squares per line you wish for [1-100] ');
    let notInRange = true;
    while(notInRange){ 
        if(squareNum >= 1 && squareNum <= 100) {
            deleteGrid();
            createGrid(squareNum);
            let squares = document.querySelectorAll('.square');
            for(let i = 0; i < squares.length; i++) {
                squares[i].addEventListener('mouseover', () => {
                    squares[i].style.backgroundColor = '#123171';
                })
            }
            const clearGrid = document.getElementById('clear-grid');
            clearGrid.addEventListener('click', () => {
                for(let i = 0; i < squares.length; i++) {
                    squares[i].style.backgroundColor = '#F5F5F5';
                }
            })

            notInRange = false;
        } else {
            squareNum = prompt('Please, only enter values that are in the specified range!');
        }
    }
    
    
})


