const gridElement = document.getElementById("container");

for (let j = 0; j < 400; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridElement.appendChild(square);
}

