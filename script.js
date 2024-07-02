const SKETCHPAD_WIDTH = 640;
const SKETCHPAD_HEIGHT = 640;
const sketchpad = document.querySelector(".sketch-container");
const slider = document.querySelector("#range");
const size = document.querySelector(".size-container");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
let rainbowState = false;

// initialize
clear.addEventListener('click', () => {updateGrid()});
rainbow.addEventListener('click', () => {
    rainbowState = !rainbowState;
    if (rainbowState) {
        rainbow.style.backgroundColor = "rgb(73, 73, 73)";
        rainbow.style.color = "white";
    }
    else {
        rainbow.style.backgroundColor = "white";
        rainbow.style.color = "rgb(41, 41, 41)";
    }
});
size.textContent = slider.value + "x" + slider.value;
updateGrid();
slider.oninput = function() {
    size.textContent = slider.value + "x" + slider.value;
    updateGrid();
}

function updateGrid() {
    sketchpad.replaceChildren();
    for (let i = 0; i < slider.value**2; i++) {
        insertGridBlock(`${SKETCHPAD_WIDTH / slider.value}px`);
    }
}

function insertGridBlock(size) {
    const gridBlock = document.createElement("div");
    gridBlock.style.height = size;
    gridBlock.style.width = size;
    gridBlock.addEventListener('mouseover', () => {
        gridBlock.style.backgroundColor = getColor();
    })
    sketchpad.appendChild(gridBlock);
}

function getColor() {
    if (!rainbowState) return "black";
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}