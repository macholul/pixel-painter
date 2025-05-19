const gridElement = document.getElementById("container");

for (let j = 0; j < 400; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridElement.appendChild(square);
}

let x = 0;
let y = 0;

function moveCursor() {
    const squaresList = document.querySelectorAll(".square");
    let index = (y * 20 + x);

    for (const squareElement of squaresList) {
        squareElement.className = "square";
    }

    squaresList[index].className = "square cursor";
}