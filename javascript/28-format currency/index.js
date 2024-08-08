//toLocaleString() = returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {options});

//"locale" = specify that language (undefined = defautl set in browser)
// options = objects with formatting options  

let myNum = 100;

myNum = myNum.toLocaleString("en-US");
myNum = myNum.toLocaleString("pt-BR");
myNum = myNum.toLocaleString("de-DE");

myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
myNum = myNum.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});

console.log(myNum);