class Car {
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive() {
        `You drive the ${this.model}`
    }
}

const car1 = new Car("Mustang", 2023, "red");

const cars = [car1, car2, car3];

console.log(cars[0].model);
console.log(cars[0].year);
console.log(cars[0].color);

cars[0].drive();

function startRace(cars) {
    for(const car of cars) {
        car.drive();
    }
}