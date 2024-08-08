let symbol = window.prompt("Digite um simbolo!");
let rows = window.prompt("Digite o número de linhas!");
let columns = window.prompt("Digite o número de colunas!");

for(let i = 1; i <= rows; i += 1){
    for(let j = 1; j <= columns; j += 1){
        document.getElementById("rectangle").innerHTML += symbol;     
    }
    document.getElementById("rectangle").innerHTML += "<br>";
}