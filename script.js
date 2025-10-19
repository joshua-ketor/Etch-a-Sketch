const container = document.querySelector("#container");
const size = 16;
let div;

container.style.width = `${(20 * size) + (size * 2)}px`
container.style.height = `${(20 * size) + (size * 2)}px`
for (let i = 0; i < size * size; i++) {
    div = document.createElement("div");
    div.style.width = "20px";
    div.style.height = "20px";
    div.style.backgroundColor = "blue";
    div.style.border = "1px solid black";
    container.appendChild(div);

}