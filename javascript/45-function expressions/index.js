// function expression = function without a name (anonymous function) avoid polluting the global scope with names. Write it, then forget about it

const greeting = function() {
    console.log("hello");
}

greeting();

let count = 0;

document.getElementById("increaseButton").onclick = function() {
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function() {
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}