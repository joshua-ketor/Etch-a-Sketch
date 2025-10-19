const container = document.querySelector("#container");
let size = 16;
let div;
const divLength = 20;

container.style.width = `${(divLength * size) + (size * 2)}px`
container.style.height = `${(divLength * size) + (size * 2)}px`

function buildGrid() {
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++) {
        div = document.createElement("div");
        div.style.width = `${divLength}px`;
        div.style.height = `${divLength}px`;
        div.style.backgroundColor = "blue";
        div.style.border = "1px solid black";

        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = "red";
        });
        container.appendChild(div);

    }
}

buildGrid(size);