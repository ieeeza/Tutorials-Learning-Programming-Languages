// 2d array = An array of arryas

let fruits =     ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats =      ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

//groceryList[][] = ""; // primeiro colchetes se trata da localização X e o segundo da Y na lista de arrys bidimensional.

for(list of groceryList) {
    for(foods of list) {
        console.log(foods);
    }
}