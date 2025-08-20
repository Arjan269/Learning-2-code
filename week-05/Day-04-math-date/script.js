"use strict"
console.log(`Jarvis initiate Connection`);

// ======== Strict Mode ======== //
// const typeof = 21; // error

// const interface = "banana"; //Unexpected Syntax

// x = 3.14; // ReferenceError; x is not defined

// Drivers License example
let hasDriversLicense;

const passTest = true;

if(passTest) {
    hasDriversLicense = true
};

if (hasDriversLicense) {
    console.log("Congrats, you can drive 🚗")
};

// ======== Date Object ======== //
const pastDate = new Date(1995, 11, 17, 3, 24, 0);
console.log(pastDate, typeof pastDate);


const myDate = new Date();
console.log("Current Date:", myDate);
console.log("Year-Old:", myDate.getYear());
console.log("Year:", myDate.getFullYear());
console.log("Month:", myDate.getMonth());
console.log("Date:", myDate.getDate());
console.log("Day:", myDate.getDay());
console.log("Hours:", myDate.getHours());
console.log("Minutes:", myDate.getMinutes());
console.log("Seconds:", myDate.getSeconds());

console.log("Time:", myDate.getTime());
console.log("ISOString:", myDate.toISOString());

// ======== Date Formatting ======== //
// Using the Intl DateTimeFormat API
const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long"
}

const myFormattedDate = new Intl.DateTimeFormat("en-NZ", options).format(myDate);

console.log(myFormattedDate);

const myBirthDate = new Date(1997, 2, 12, 7, 2, 23);
const birthday = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
    weekday: "long"
}

const formatBirthday = new Intl.DateTimeFormat("en-NZ", birthday).format(myBirthDate)

console.log(`My Birthday is ${formatBirthday}`)

// ======== Math Object ======== //
console.log(Math);

console.log("Max:", Math.max(5, 4, 7));
console.log("Min:", Math.min(5, 4, 7));
console.log("Floor:", Math.floor(5.05));
console.log("Floor:", Math.floor(5.95));
console.log("Ceil:", Math.ceil(5.01));

console.log("Round:", Math.round(5.01));
console.log("Round:", Math.round(5.91));
console.log("Round:", Math.round(5.5));
console.log("Round:", Math.round(5.499999));


console.log("To fixed:", 3.14159.toFixed(2));
console.log("Power:", Math.pow(3, 2));

console.log("Random:", Math.random() * 10);

console.log("Random:", Math.floor((Math.random() * 10)));
console.log("Random:", Math.floor((Math.random() * 10) + 1));
console.log("Random:", Math.floor((Math.random() * 11)));

// ======== Exercise 2 ======== //
const favNumbers = [12, 19, 31];

console.log(Math.max(...favNumbers));
console.log(Math.min(...favNumbers));
console.log(Math.pow(Math.min(...favNumbers), 2));

// Random choice of numbers
const myFavNumbers = [12, 19, 31];
const randomNumber = Math.floor(Math.random() * myFavNumbers.length);

console.log(`From my list of favorite numbers is ${myFavNumbers[randomNumber]}`);


// ======== Exercise 3 ======== //
function pickRandomFruit(fruitArray) {
  const randomIndex = Math.floor(Math.random() * fruitArray.length);
  return fruitArray[randomIndex];
}

const fruits = ['Apple', 'Banana', 'Grape', 'Pineapple'];
const randomFruit = pickRandomFruit(fruits);

console.log(randomFruit);

// shortened 
const fruity = ['Fejoa', 'Tangerine', 'Strawberry'];
const RandomFruity = (Math.floor(Math.random()) * fruity.length);

console.log(fruity[Math.floor(Math.random() * fruity.length)]);

