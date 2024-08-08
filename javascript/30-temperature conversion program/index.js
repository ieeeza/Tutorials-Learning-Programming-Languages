document.getElementById("submitBtn").onclick = function() {
 
    let temp;

    if(document.getElementById("cButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelcius(temp);
        document.getElementById("tempLabel").innerHTML = `The temparature is ${temp} Celsius.`;
    }

    else if (document.getElementById("fButton").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = tofahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = `The temparature is ${temp} Fahremheit.`;
    }

    else {
        document.getElementById("tempLabel").innerHTML = "Please select a unit";
    }
}

function toCelcius(temp) {
    return (temp - 32) * (5/9);
}

function tofahrenheit(temp) {
    return temp * 9 / 5 + 32;
}