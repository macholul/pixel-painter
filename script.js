const gridElement = document.getElementById("container");

for (let j = 0; j < 400; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridElement.appendChild(square);
}

let x = 0;
let y = 0;
const squaresList = document.querySelectorAll(".square");

function moveCursor() {
    let index = (y * 20 + x);

    for (const squareElement of squaresList) {
        squareElement.className = "square";
    }

    squaresList[index].className = "square cursor";
}

document.addEventListener("keydown", (e) => {
    let key = e.key;

    if (key === "ArrowUp" && y > 0) {
        y--;
        moveCursor();

    } else if (key === "ArrowLeft" && x > 0) {
        x--;
        moveCursor();

    } else if (key === "ArrowRight" && x < 19) {
        x++;
        moveCursor();

    } else if (key === "ArrowDown" && y < 19) {
        y++;
        moveCursor();

    } else if (key === " ") {
        let index = (y * 20 + x);
        squaresList[index].className = "square painted";
    }
});