// The ideia behind a module is that it's a file of reusable code
// we can inport sections of pre written code to use whenever
// great for any general utility values and functions
// helps to make your code more reusable and maintanable
// think of modules as separate chapters of a book

import {PI, getCircumference, getArea} from "./math_util.js";
// you can import everything by using * keyword
// can use the keyword "as" to give a name to import codes (need to use the name dot before calling. Ex: math_util.PI)

console.log(PI)
let circumference = getCircumference(10);
console.log(circumference);

let area = getArea(10);
console.log(area);