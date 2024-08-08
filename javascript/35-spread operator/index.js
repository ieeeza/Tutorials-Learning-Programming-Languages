// spread operator = allows an iterable such as an array or strinjg to be expanded
//...                in places where zero or more arguments are expected (unpack the elements)


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let maximum = Math.max(...numbers);
console.log(maximum);

let class1 = ["spongeBob", "Patrick", "Sindy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];

class1.push(...class2);

console.log(...class1);