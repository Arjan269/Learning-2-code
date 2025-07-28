console.log("Connected 🥳");

// Primitive data types
//  Numbers
const year = 2025;
const pi = 3.142;

console.log(year, typeof year);
console.log(pi, typeof pi);

// String
const firstName = "Arjan";
let greeting = "Morena"
const num = "10";

console.log(firstName, typeof firstName);
console.log(greeting, typeof greeting);
console.log(num, typeof num);

// Boolean 
let isRaining = false;
console.log(isRaining, typeof isRaining)

// Undefined
let x;
console.log(x, typeof x);

x = 5; 
console.log(x, typeof x);

//  Null
let iAmAnEmptyValue = null;
console.log(iAmAnEmptyValue, typeof iAmAnEmptyValue);

// Empty space
const amIAString = " "
console.log(amIAString, typeof amIAString);

// Excercise 1 & 2
const shallWe = '"Shall we go?" shesaid.'
console.log(shallWe);

const rememberTo = `Remeber to say "Please" 'and' "Thank you."`
console.log(rememberTo);

// Concatenating Strings
const message = 'Hello' + ' ' + 'World'
console.log(message);

const userName = "Doris";
const welcomeMessage = "Welcome" + " " + userName + "!";
console.log(welcomeMessage);

// Excercise 3 
const qouteOne =   `"Concentrate all your thoughts `;
const qouteTwo = `upon the work in hand. The sun's rays do not burn `;
const qouteThree = `until brought to a focus." `;
const qouteFour = `- Alexander Graham Bell`;
const qoutes = qouteOne + qouteTwo + qouteThree + qouteFour;
console.log(qoutes);

// Excercise 4
const height = 1.83;
const weight = 100;

let bmi = weight / (height * height);
console.log("Buddy's BMI is " + bmi);

const book = 5;
const bookAmount = 10;
const price = book * bookAmount;
console.log(" Buddy and Sally brought 10 books for $" + price + ".00");

// String Lengths
const animal = "CAPYBARA";
console.log(animal.length); // Output: 8
console.log(animal[2]); 
console.log(animal[7]); 
console.log(animal [animal.length - 1]); 
console.log(animal.at (-1)); 

// 