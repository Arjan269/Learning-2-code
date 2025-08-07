console.log(`Jarvis Initiate Connection`);

// ======== Arrow Functions ======== //

// Traditional Function //
function sum(num1, num2) {
    console.log(num1, num2);
    return num1 + num2;
}

console.log(sum(3, 4));

// Arrow Function //
const sumNum = (num1, num2) => {
    console.log(num1, num2);
    return num1 + num2;
}

console.log(sumNum(3, 4));

// Arrow Function - more condesed //

// Traditional way //
function doubleNum(num) {
    return num * 2;
}

console.log(doubleNum(2));

// Arrow Function //
const doubleNums = num => num * 2;

console.log(doubleNums(3));

// ======== Excercise 1 ======== //
// Part 1 //
const divideNum = (num1, num2) => num1 / num2;

console.log(divideNum(6, 2));

// Part 2 //
const evenNum = num => num % 2 === 0;

console.log(evenNum(2));
console.log(evenNum(1));

// ======== Defualt parameters ======== //
// Num 2 Undefined
function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 2))
console.log(multiply(5));

// Num 2 defined
function multiplY(num1, num2 =1) {
    return num1 * num2;
}

console.log(multiplY(5));
console.log(multiplY(5,3));

// Example with a string
function sayHi(greeting = "Greetings", name = "Mortal") {
    return `${greeting} ${name}!`
};

console.log(sayHi("Hi", "Buddy"));
console.log(sayHi("Hi"));
console.log(sayHi());

// ======== Excercise 2 ======== //
const divideNums = (num1, num2 = 1) => num1 / num2;

console.log(divideNums(3, 2));
console.log(divideNums(3));

// ======== Excercise 3 ========
// Part 1
const word = (word1 = "Greetings", word2 = "Mortal") => `${word1} ${word2}!`;

console.log(word("Yosh", "me goat"));
console.log(word());

//Part 2
const wordOne = "Greetings";
const wordTwo = "Mortals";
const birdIsTheWord = (str1 = "Hello", str2 = "Panda") => `${str1} ${str2}!`

console.log(birdIsTheWord());
console.log(birdIsTheWord(wordOne, wordTwo));

// ======== Spread Opeator ======== //
console.log("======== Spread Opeator ========");

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, ...arr1, 6, 7, 8, 9];

console.log(arr2);

// Spread Excercise //
const arr3 = [1, 2, 3];
const arr4 = ["A", "B", "C"];

const arr5 = [...arr3, ...arr4];

console.log(arr5);

// ======== JavaScript shorthands ======== //
const likeJavaScript = true;
if (likeJavaScript) {
    console.log("Yay! JavaScript");
} else {
    console.log("Meh...JavaScript😔");
}

if  (!likeJavaScript) {
    console.log("Meh...JavaScript😔");
} else {
    console.log("Yay! JavaScript");
}

let userName;
let userInput = "Bob"; //can change if user set up thier name
const defultUserName = "Guest"

userName = userInput || defultUserName

console.log(userName);

// if (userInput) {
//   userName = userInput;
// } else {
//   userName = defaultUserName;
//   console.log("Please enter a name");
// }

const num1 = Number("100");
const num2 = Number("100.01");

const num3 = +("100");
const num4 = +("100.01");
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// ===== Converting things to Numbers ===== //
// There are a number of ways of doing this that we have looked at already
// But we have one more method here

// Ways we have seen
console.log(parseInt("3.5")); // Output: 3
console.log(parseFloat("3.5")); // Output: 3.5
console.log(Number("3.5")); // Output: 3.5

// Newer way available in ES6
console.log(+"3.5"); // Output: 3.5

// ==== Regex (not an ES6 feature) ==== //
// This is the string we will be testing
const worD = "a"; 

// This is the Regex pattern we want to see if it matches
// It means is the string either an 'a' OR a 'b'\

// Method 1
// let regexPattern = /a|b/

// Method 2
let regexPattern = new RegExp("a|b");

// Test the string using the pattern and the .test() method
let answer = regexPattern.test(worD);
console.log(answer); // Output: true

// ======== JQuery ======== //
