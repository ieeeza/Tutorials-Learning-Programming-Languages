// constructor = a special method of a class, aceepts arguments and assigns properties.

class student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new student("César", 20, 50);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);

student1.study();