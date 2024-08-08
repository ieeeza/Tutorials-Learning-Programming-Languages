// arrow function = compact alternative to a tradicional function expression.
// =>

const greeting = userName => console.log(`hello ${userName}`);

greeting("César");

const percent = (x, y) => x / y * 100;

console.log(percent(45, 50));

let grades = [100, 90, 80, 50, 40];

grades.sort((x, y) => x - y);
grades.forEach((Element) => console.log(Element));