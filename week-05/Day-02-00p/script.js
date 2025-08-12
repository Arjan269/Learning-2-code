console.log(`Jarvis Initiate Connection`);

// ======== This Keyword ========//
// Global Execuion context
console.log(this === window);

// Local Execution contect
const person = {
    firstName: "Minnie",
    lastName: "Mouse",
    greeting: function () {
        // console.log(this);
        console.log(`Hello ${this.firstName}`);
    }
};

person.greeting();

// ==== Imperative / Procedural ==== //
const userName = "Tony Stank";
const greeting1 = "gOOd MorNing";

const greeting1Lower = greeting1.toLowerCase();
const uniqueGreeting1 = `${greeting1Lower} ${userName}`;
console.log(uniqueGreeting1);

const greeting2 = "GooD EveNING";
const greeting2Lower = greeting2.toLowerCase();
const uniqueGreeting2 = `${greeting2Lower} ${userName}`;

console.log(uniqueGreeting2);

// ======== Functional Programming ======== //
function greetingConstruction(greeting, user) {
    return `${greeting.toLowerCase()} ${user}`

};

console.log(greetingConstruction(greeting1, userName));
console.log(greetingConstruction(greeting2, userName));

// ======= OOP Programming ======== //
// In OOP, functions (called methods) are stored inside objects.
// These methods should relate to the object they belong to, 
// ...allowing the object to manage its own data and behavior.
const greetingObj = {
    userName: "Bob",
    greetingConstruction: function(greeting) {
        return `${greeting.toLowerCase()} ${this.userName}`
    }
}

console.log(greetingObj.greetingConstruction("gOOd EvENIng"));  

// ======== Class and Constructs ======== //
const user1 = {
    firstName: "Ron",
    lastName: "Swanson"
};

const user2 = {
    firstName: "Leslie",
    lastName: "Knope"
};

class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    greeting() {
        console.log(`Hey ${this.firstName}`)
    }
}

const user3 = new User("Ron", "Swanson");
const user4 = new User("Leslie", "Knope");

console.log(user3);
console.log(user4);
user4.greeting();

// ====== Excercise 1 ====== //
class Vehical {
    constructor(model, manufacturer, year, colour) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.colour = colour; 
    }

    printColour() {console.log(`The ${this.year} ${this.manufacturer} ${this.model} is ${this.colour}`)}
}

const car1 = new Vehical("Skyline R34", "Nissan", 1999, "White");
const car2 = new Vehical("Supra", "Toyota", 1998, "Red");
const car3 = new Vehical("WRX", "Subaru", 1995, "Blue");
console.log(car1);
console.log(car2);
console.log(car3);

car1.printColour();
car2.printColour();
car3.printColour();

// class inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const doggo = new Dog("Tony Tony Chopper", "Raccoon Dog")
console.log(doggo);