// error = object with a description of something went wrong

// throw = executes a user-defined error.

try {
    let x = window.prompt("Enter a #");
    x = Number(x);

    if(isNaN(x)) throw "thats wasnt a number!";
    if(x == "") throw "This is empty!";

    console.log(`${x} is a number!`);
}

catch(error) {
    console.log(error);
}

finally {
    console.log("It will always executes!!");
}