//static = belongs to the class, not the objects
//         properties: useful for caches, fixed-configurations
//         methods: useful for utility functions

class car {
    static numberOfCars = 0;

    constructor(model) {
        this.model = model;
        car.numberOfCars += 1;

    }
    static startRace() {
        console.log("3...2...1...GO!");
    }
}

const car1 = new car("Corvette");
const car2 = new car("Ferrari");

console.log(car.numberOfCars);