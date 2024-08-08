//const element = document.getElementById("myButton");
//const element = document.body;
//const element = document.getElementById("myText");
const element = document.getElementById("myDiv");

//element.onclick = doSomething;
//element.onload = doSomething;
//element.onchange = doSomething;
//element.onmouseover = doSomething;
//element.onmouseout = doSomethingElse;
element.onmousedown = doSomething;
element.onmouseup = doSomethingElse;

function doSomething() {
    //alert("You did Something!");
    element.style.backgroundColor = "red";
}

function doSomethingElse() {
    //alert("You do something else!");
    element.style.backgroundColor = "lightgreen"
}