document.addEventListener('DOMContentLoaded', function() {

    const grid = document.querySelector('#grid');
    const gridSize = 16;

    grid.style.display = 'flex'

    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const gridsquare = document.createElement('div');
            gridsquare.classList.add('grid-square');

            gridsquare.style.width = "50px"; 
            gridsquare.style.height = "50px"; 
            gridsquare.style.backgroundColor = "red";
            gridsquare.style.border = "10px";
            gridsquare.style.borderColor = "black";

            row.appendChild(gridsquare);
        }

        grid.appendChild(row);
    }
;

    //grid.appendChild(gridsquare);
});
