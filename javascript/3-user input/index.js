//easy way with window prompt

//let userName = window.prompt("What's your name ?");
//console.log(userName);

//difficult way with html textbox


let username;

document.getElementById("myButton").onclick = function() {

    username = document.getElementById("myName").value;
    console.log(username); 
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}

