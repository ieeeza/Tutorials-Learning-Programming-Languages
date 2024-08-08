// array.reduce() = reduces an array to a single value.

let prices = [5, 10, 15, 20, 25, 30, 35];
let total = prices.reduce(checkOut);

console.log(total);

function checkOut(total, element) {
    return total + element;
}