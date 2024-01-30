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
            //gridsquare.style.backgroundColor = "red";
            gridsquare.style.border = "10px";
            gridsquare.style.borderColor = "black";

            row.appendChild(gridsquare);
        }

        grid.appendChild(row);
    }

    const mouseHover = document.getElementById("grid");
    mouseHover.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";

        setTimeout(() => {
            event.target.style.backgroundColor = "";
        
        }, 500);
        },
        false,
    );

    mouseHover.addEventListener(
        "mouseover",
        (event) => {
            event.target.style.color = "orange";

            setTimeout(() => {
                event.target.style.color = "";

            }, 500);
        },
        false,
    );

});
