console.log("Connected GG");

console.log("==== Conditionals ====");
if (1 === 1) {
    console.log("The condition was true");
}

const x = 10;

if (x > 1) {
    console.log("x is greater than 1");
}

const y = 1;

if (y > 10) {
    console.log("y is greater than 10");
} else {
    console.log("y is less than 10");
}

const z = 1;

if (z > 1) {
    console.log("z is greater than 1");
} else if (z === 1) {
    console.log("z is equal to 1");
} else {
    console.log("z is less than 1");
} 

console.log("==== Excercise 1 ====");
const num = 66

if (num < 0) {
    console.log("num is negative")
} else if (num === 0) {
    console.log("num is eual to 0")
} else {
    console.log("if all else fails excicute order 66")
}

console.log("==== Excercise 2 ====");
const myString = "apple";

if (myString[0] === "p") {
    console.log("first letter is p");
} else if (myString[0] === "a") {
    console.log("first letter is a")
} else {
    console.log("These are not the droids you're looking for");
}

console.log("==== Excercise 2 with Boolean ====");
const myStrings = "apple";

if (myStrings[0] === "a") {
    console.log(Boolean(true, "a"));
} else {
    console.log(Boolea(null));
}

console.log("==== Ternary Operator ====");
const stringMy = "peach";

stringMy[0] === "p" ? console.log(true) : console.log(false);

console.log("==== Excercise 3 ====")
const word = "hippopotamus";

word.length > 10 
    ? console.log(" the word is long") 
    : console.log("The word is NOT long. It is short.");

console.log("==== Logical Operators with If else =====")
// AND Operator
const isSunny = true;
const temperature = 28;

if (isSunny && temperature > 25) {
    console.log("It's hot AND sunny")
} else {
    console.log("it's not that hot AND sunny")
}

// OR Operator
const hasPremiumSubscription = false;
const hasFreeTrail = true;

if (hasPremiumSubscription || hasFreeTrail) {
    console.log("You have access to premium content.");
} else {
    console.log("Upgrade to a premium subscription for full access.");
}

console.log("==== Evaluation Order ====");
let a = 4,
    b = 2;
    c = 0;
 if (a == 4 && (!(b == 1) || c == 0)) {
    console.log("The comparison value is true");
 }   else {
    console.log("The comparison value is false");
 }

 console.log("==== Excercise 4 ====");
 const age = 65
 const hasPremiumSubs = true;
 const ownCoupon = false;
 
if (age >= 65 && (hasPremiumSubs || ownCoupon)) {
    console.log("Here id your Special offer");
} else {
    console.log("Not old enough for promotional offer")
}

(age >= 65 && (hasPremiumSubs || ownCoupon))  ? console.log("Access Granted") : console.log("Access Denied");

console.log("==== Excersice 4 Bonnies ====");
const Age = 67;
const isPremiumMember = true;
const hasCoupon = false;

if (Age >= 65 && (isPremiumMember || hasCoupon)) {
    console.log("Sweet, you can watch Netflix");
} else {
    console.log("Sorry, no Netflix for you")
}

(Age >= 65 && (isPremiumMember || hasCoupon)) ? console.log("Netflix") : console.log("no Netflix");

console.log("==== Switches ====");
const fruit = "banana";

switch (fruit) {

    case "orange":
        console.log("the fruit is a orange");
        break;

    case "strawberry":
        console.log("the fruit is a strwberry");
        break;   

     case "banana":
        console.log("the fruit is a banana");
        break;    
    
     default:
        console.log("fruit not found");
}

console.log("==== Excercise 5 ====")

const dayOfWeek = "Wednesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("Today is Monday it's a workday");
        break;

    case "Tuesday":
        console.log("Today is Tuesday it's a workday");
        break;
        
    case "Wednesday":
        console.log("Today is Wendnesday it's a workday");
        break;

    case "Thursday":
        console.log("Today is Thursday it's a workday");
        break;

    case "Friday":
        console.log("Today is Friday it's a workday");
        break;

    case "Saturday":
        console.log("Today is Saturday it's the weekend");
        break;

    case "Sunday":
        console.log("Today is Sunday it's the weekend");
        break;

    default: 
    console.log("Calander is broken");
}

// shorthand
switch (dayOfWeek) {
case "Monday":
case "Tuesday":
case "Wednesday":
case "Thursday":
case "Friday":
    console.log("It's a weekday");
    break;
case "Saturday":
case "Sunday":
    console.log("It's the weekend");
    break;
default:
    console.log("Not a vaild day of the we");    
}

