const gridSquare = document.querySelector(".container");
let grayOpacity = 0;
let squareBoxArray = [];
let slider = document.getElementById("selected-range");
let gridSizeNumber = slider.value;

function createGrid(size, callback) {
    //removing all child grids and clearing area
    while (gridSquare.firstChild) {
        gridSquare.removeChild(gridSquare.firstChild);
    }
    let area = size * size;
    gridSquare.style.gridTemplateColumns = `repeat(${size}, 2fr)`;
    gridSquare.style.gridTemplateRows = `repeat(${size}, 2fr)`;
    for (let i = 0; i < area; i++) {
        const div = document.createElement("div");
        div.classList.add("emptySquare");
        gridSquare.appendChild(div);
    }
    getChildNodesOfContainer();
    colorBlack(); //making black brush default
    updateGridSizeText(size)
};

function updateGridSizeText(size) {
    //setting grid size text value
    let rangeSpan = document.getElementById("range-value");
    rangeSpan.textContent = size;
}

//Getting all the gridboxes inside the container
function getChildNodesOfContainer() {
    const squareBox = gridSquare.children;
    squareBoxArray = Array.from(squareBox);
}

function colorBlack() {
    squareBoxArray.forEach(node => {
        node.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "Black";
        });
    });
}

function colorFul() {
    squareBoxArray.forEach((node) => {
        node.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = getRandomColor();
        });
    });
}

function grayScale() {
    grayOpacity = 0;
    squareBoxArray.forEach((node) => {
        node.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'rgba(0, 0, 0, ' + grayScaleModeColor() + ')';
        });
    });
}

function erase() {
    squareBoxArray.forEach((node) => {
        node.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'white';
        });
    });
}

function resetGrid(gridBox) {
    createGrid(gridBox, getChildNodesOfContainer);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function grayScaleModeColor() {
    if (grayOpacity >= 1) {
        grayOpacity = 0.1;
    }
    else if (grayOpacity < 1 && grayOpacity >= 0) {
        grayOpacity += 0.1;
    }
    return grayOpacity;
}

const brushButtons = document.querySelectorAll("button");
brushButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let mode = button.className;
        if (mode === 'black') {
            colorBlack();
        } else if (mode === 'color') {
            colorFul();
        } else if (mode === 'eraser') {
            erase();
        } else if (mode === 'grey-scale') {
            grayScale();
        } else if (mode === 'reset-grid') {
            resetGrid(16);
        }
    });

});

createGrid(gridSizeNumber, getChildNodesOfContainer); //making default grid 