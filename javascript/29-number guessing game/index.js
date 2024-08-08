
const answer = Math.floor(Math.random() * 10 + 1);
console.log(answer);
let guesses = 0;

document.getElementById("submitButton").onclick = function() {
    guess = document.getElementById("guessField").value;
    guesses++;

    if(guess == answer) {
        window.alert(`"Congratulations you WIN. It took "${guesses}" guesses."`);
    } else if(guess > 10 || guess < 0) {
        window.alert("type a number between 1 - 10");
    } else if(guess.trim() == "") {
        window.alert("Type a number to guess");
    } else if(guess > answer){
        window.alert("NO!! less");
    } else { 
        window.alert("NO!! more");
    }
}