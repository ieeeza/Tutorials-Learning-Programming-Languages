// setTimeout() = invokes a function after a number of milliseconds. asychronous function (doesn't pause execution)

let item = "cryptoCurrency";
let price = 430.69;

let timer1 = setTimeout(firstMessage, 3000, item, price);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 9000);

function firstMessage(item, price) {
    alert(`Buy this ${item} for ${price}`);
}

function secondMessage() {
    alert(`this is not a scam`);
}

function thirdMessage() {
    alert(`DO IT!!!`);
}

document.getElementById("myButton").onclick = function() {
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
} 