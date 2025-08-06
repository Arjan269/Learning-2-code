console.log(`Jarvis initiate connection`);

//  Basic console logging as first log practice
console.log(`Hello World`);

// Variables
let namae = 'Arjan';

console.log(namae);

// variables cannot be a reserved keyword
// variables should be meaningful and discriptive
// variables cannot start with a number (1name)
// variables cannot contain a space or hypen( - )
// variables are case sensitive 

let firstName = 'Arjan'; 
let lastName = 'Petera';

//  Constants

const interestRate = 0.3;
// interestRate = 1; cannot reassign a constant
console.log(interestRate);

//primitive datatypes
//Dynamic languages can be changed as opposed to satic 

let name = 'Megumi' //string literal
let age = 28; // Number literal
let isApproved = true; //Boolean literal can be true o false
let firstNamae = undefined;
let lastNamae = null; // can be changed later


//typeof is used to let you as the developer know what the variable is

//Reference type
//Objects are similar to objects in real life, they have different properties

let person = {
   Name: 'Joe',
   Age: 27 
}; //keys are considered properties of this object


// Dot Notation
person.Name = 'Jodeci';

// Bracket Notaton
person['Name'] = 'JoeJoe';
console.log(person);
console.log(person.Name);
console.log(person.Age);

// Selection Bracket Notation
let Selection = 'name';
person[Selection] = 'Jodz';

//Arrays
// arrays are used to store lists
let selectedColours = ['Red', 'Blue']; //[] an empty array is an Array Literal
selectedColours[2] = 1; // The length of an aray is dynamic ad can change the types of objects in the array are also dynamic which means you could change the last object of the array into a number instead of colour

console.log(selectedColours);
console.log(typeof selectedColours);
console.log(selectedColours[0]); // if you want to access an element in the array use the [] and the idex number of the element

//Length Property 
console.log(selectedColours.length);

//Functions
//Functions are one of the fundamental building blocks of JavaScript a function is basically a set of statements that performs a task or calculates a value


//Performing a Task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);
console.log(number) // or you can console.log(square(2))

greet('Yuji', 'Itadori'); // functions can have inputs and these inputs can change how the function behaves
greet('Gojo', 'Satoru');

//A function is a set of statements that either performs a task or calculate andreturns a value 

