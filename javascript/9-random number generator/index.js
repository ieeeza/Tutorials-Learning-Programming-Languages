let x;
let y;
let z;

document.getElementById("rolldice").onclick = function() {

    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 20) + 1;
    z = Math.floor(Math.random() * 12) + 1;

    document.getElementById("dice1").innerHTML = x;
    document.getElementById("dice2").innerHTML = y;
    document.getElementById("dice3").innerHTML = z;

}
