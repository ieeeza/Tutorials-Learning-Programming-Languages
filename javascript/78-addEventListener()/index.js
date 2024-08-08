//.addEventListener(event, function, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);

//useCapture = if the two elements are taking the same space and they're listening to the same event you could specify which would has preference

function changeBlue() {
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "blue";
}