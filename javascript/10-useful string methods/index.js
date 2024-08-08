let username = "César";
let phoneNumber = "8818-9294";

console.log(username.length); // Tamanho da string
console.log(username.charAt(0)); // Mostra a caractere na posição indicada
console.log(username.indexOf("a")); // Mostra a posição da caractere indicada
console.log(username.lastIndexOf("a")); // Mostra a ultima posição em que a caractere se encontra
username = username.trim(); // Remove todos os espaços vazios (antes e depois da string)
username = username.toUpperCase(); // Transforma a string em maiúscula
username = username.toLowerCase(); // Transforma a string em minúscula

phoneNumber = phoneNumber.replaceAll("8", "-");
console.log(phoneNumber);