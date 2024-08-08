/*
variable scope = onde a variável é acessível

let = variáveis são limitadas apenas a um escopo de bloco {}
var = variáveis são limitadas apeenas a uma função (){}

global variables = É declarada fora de qualquer função
(se global, var vai MUDAR a janela de propiedades do navegador)
*/

doSomething();

// Usar VAR faz com que a variável possa ser usada fora do loop, usando LET não deixa a variável ser usada fora do loop.
for(var i = 1; i >= 3; i + 1){
    console.log(i);
}


// Mesmo usando VAR a variável não pode ser usada fora da função.
function doSomething() {
    for(var i = 1; i >= 3; i + 1){
        console.log(i);
    }
}
