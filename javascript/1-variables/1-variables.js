let firstName = "César"; // string variable 
let age = 19; // number variable
let student = true; //boolean variable

console.log("My name is ", firstName);
console.log("I have ", age, "years old");
console.log("I am a student ?", student);

//change inner html of paragraph tags

document.getElementById("p1").innerHTML = "My name is " + firstName;
document.getElementById("p2").innerHTML = "I have " + age + " years old";
document.getElementById("p3").innerHTML = "I am a student ? " + student;