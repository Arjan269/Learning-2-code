console.log(`Hello World`);

function greet(name) {
    return `Hello ${name}! Welcome to Node!`
}

console.log(greet("Sally Roggers"))

// ===== Importing a Module ======= //
// Common JS method -------------
// const myModules = require('./myModules.js'); // How we import the module
// console.log("Logging modules:", myModules);

// ESM Method ------------
// Destructuring method
// import { addNums, subtractNums, isNumber, multiplyNums } from './myModules.js';

// Importing all at once as an object 
import * as myModules from './myModules.js';

// ========= Exercise 1 ======== //
// // Option 1:
// function greet(name) {
//     console.log(`Exercise 1: Hello ${name}, welcome to Node!`)
// }

// greet("Sally Roggers")

// // Option 2:
// function greet2(name) {
//     return `Exercise 1: Hello ${name}! Welcome to Node!!`
// }

// console.log(greet2("Cindy"))


// ==== Accessing the functions from the imported module ===== //
console.log("addNums function:", myModules.addNums(10, 4)); 
console.log("subtractNums function:", myModules.subtractNums(10, 4));
console.log("isNumber function:", myModules.isNumber("10")); 
console.log("isNumber function:", myModules.isNumber("banana")); 
console.log("multiplyNums function:", myModules.multiplyNums(10, 4)); 

// This method will work if you use the ESM destructuring imports method
// console.log("addNums function:", addNums(10, 4));
// console.log("subtractNums function:", subtractNums(10, 4)); 
// console.log("isNumber function:", isNumber("10"));
// console.log("isNumber function:", isNumber("banana")); 
// console.log("multiplyNums function:", multiplyNums(10, 4)); 