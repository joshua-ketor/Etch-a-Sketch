const body = document.querySelector("body");
const container = document.querySelector("#container");
const btn = document.createElement("button");
let size = 16;
let div;
const divLength = 20;

btn.innerText = "Grid Length";
btn.addEventListener('click', () => {
    size = +prompt("Input grid length (1-100): ", 16);
    // validate the size input
    while (isNaN(size) || size < 1 || size > 100) {
        size = +prompt("Input grid length (1-100): ", 16);
    }
    container.style.width = `${(divLength * size) + (size * 2)}px`
    container.style.height = `${(divLength * size) + (size * 2)}px`
    buildGrid(size);
});

container.style.width = `${(divLength * size) + (size * 2)}px`
container.style.height = `${(divLength * size) + (size * 2)}px`

body.insertBefore(btn, container);

function buildGrid() {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        div = document.createElement("div");
        div.style.width = `${divLength}px`;
        div.style.height = `${divLength}px`;
        div.style.backgroundColor = "blue";
        div.style.border = "1px solid black";

        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = `rgb(
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)},
            ${Math.floor(Math.random() * 255)})`;
        });
        container.appendChild(div);

    }
}

buildGrid(size);