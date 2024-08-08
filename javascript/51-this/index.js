// this = reference to a particular object. The object depends on the immediate context.

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive: function() {
        console.log(`you drive ${this.model}`);
    },

    break: function() {
        console.log("You step on the break!");
    }
}

const car2 = {
    model: "corvette",
    color: "blue",
    year: 2024,

    drive: function() {
        console.log(`you drive ${this.model}`);
    },

    break: function() {
        console.log("You step on the break!");
    }
}

car1.drive();
car2.drive();