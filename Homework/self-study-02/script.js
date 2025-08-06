console.log(`Jarvis Initiate Connecton`);

//Object-oriented programing
//Encapsulation
//Abstraction
//Inheritance
//Polymorphism
let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// Object-oriented way
let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

//Procedural programming is dividing a program into a set of functions so we have data stored in a bunch of variables and functions that operate on the data this style of programming is very simple and straightforward, programs grow it will end up with a bunch of functions that are all over the place, making changes to one function and then several other functions can break the code and that's people call spaghetti code.