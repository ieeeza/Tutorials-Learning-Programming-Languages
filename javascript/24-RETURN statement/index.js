let area;
let width;
let height;

width = window.prompt("Insira a largura!");
height = window.prompt("insira a altura!");

area = getArea(width, height);

console.log("Sua area é:", area);

function getArea(width, height) {
    return width * height;
}