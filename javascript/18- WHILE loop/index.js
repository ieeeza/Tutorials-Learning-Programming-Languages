let userName = "";

while (userName == "" || userName == null) {
    userName = window.prompt("Insira seu nome!!");
}

console.log("Olá", userName);