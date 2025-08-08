console.log(`Jarvis Initiate Connection`);

// ======== Push Method ======== //

const iceCreams = ["Chocolate", "Cookies and cream", "Orange Choc chip"];

// console.log(iceCreams.push("Double Choc fudge"))
iceCreams.push("Double Choc fudge");

console.log(iceCreams);

// ======== Pop Method ======== //

// console.log(iceCreams.pop());
iceCreams.pop();

console.log(iceCreams);

// ======== Unshift Method ======== //

// console.log(iceCreams.unshift("Peanut butter"));
iceCreams.unshift("Peanut butter");

console.log(iceCreams);

// ======== Shift Method ======== //

// console.log(iceCreams.shift());
iceCreams.shift();

console.log(iceCreams);

// ======== String.split() Method ======== //

const iceCreamSplit = "Vanilla choCOate matCha";
const resultIceCreamSplit = iceCreamSplit.toLowerCase().split(" ", 2);

console.log(resultIceCreamSplit);
console.log(iceCreamSplit);

// ======== Join Mehood ======== //
const iceCreamsJoin = ["vanilla", "chocolate", "matcha"];
const resultIceCreamsJoin = iceCreamsJoin.join(" ");

console.log(resultIceCreamsJoin);

// ======== Slice Method ======== //
const iceCreamsSlice = ["vanilla", "chocolate", "blueberry"];
const resultIceCreamsSlice = iceCreamsSlice.slice(1);

console.log(iceCreamsSlice);
console.log(resultIceCreamsSlice);

// ======== Excecise 1 ======== //

const sliceEx = ["html", "css", "JS", "react"];
const reultSliceEx = sliceEx.slice(2, 3);

console.log(reultSliceEx);

// ======== Splice Method ======== //
const numberSplice = [0, 1, 2, 3, 4, 5];
const resultNumberSplice = numberSplice.splice(0, 1, "Panda"); // .spilce(where to start adding, how many to delete, do we want to add anything here)

console.log(resultNumberSplice);
console.log(numberSplice);

// ======== Excercise 2 ======== //
const exSplice = ["html", "css", "react"];
const resultExSplice = exSplice.splice(2, 0, "JS");

console.log(exSplice);
console.log(resultExSplice);

// ========. For Each Method ======== //

const iceCreamsForEach = ["vanilla", "chocolate", "blueberry"];

iceCreamsForEach.forEach(function (iceCreams, index) {
    // console.log(iceCreams + " ice-cream");
    console.log(`${index + 1}. ${iceCreams} ice-cream`);
});

// Arrow Function
iceCreamsForEach.forEach((iceCreams, index) => console.log(`${index + 1}. ${iceCreams} ice cream`));

// ======== Map Method ======== //
const iceCreamsMap = ["vanilla", "chocolate", "blueberry"];
const orderedIceCreams = iceCreamsMap.map((iceCreams, index) => {
    return `Flavour ${index + 1}. ${iceCreams} ice-cream`;
});

console.log(iceCreamsMap);
console.log(orderedIceCreams);

// ======== Excercise 3 ======== //

const array1 = [1, 2, 3, 4, 5];
const array2 = array1.map(number => number * 2);

console.log(array1)
console.log(array2);

// ======== Filter Method ======== //
const iceCreamsCost = [2.95, 4, 5];
const expensiveIceCreamsCosts = iceCreamsCost.filter(cost => cost > 3);

console.log(expensiveIceCreamsCosts); 
console.log(iceCreamsCost);

// ======== Excecse 4 ======== //
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumArray = numArray.filter(even => even % 2 === 0);

console.log(numArray);
console.log(evenNumArray);

// ======== Includes Method ======== //
const arrayOfThings =["book", "pens", "paper", "penciles", "words"];
const containsEraser = arrayOfThings.includes("eraser");

console.log(containsEraser);

// ======== Excercise 5 ======== //
// const guessArray = prompt("Guess a stationary item here: ");
// const containtAnswer = arrayOfThings.includes(guessArray.toLowerCase());

// console.log(containtAnswer);

// ======== IndexOf Method ======== //
const iceCreamsIndexOf = ["vanilla", "chocolate", "blueberry"];
const chocIndex = iceCreamsIndexOf.indexOf("chocolate", 2);

console.log(chocIndex);

// ======== Every && Some Methods ======== //
const ages1 = [19, 35, 24, 55];
const everyAgeOver30 = ages1.every(age => age > 30);

console.log(everyAgeOver30);

// Some Method
const someAgeOver30 = ages1.some(function(age) {
    return age > 30
});

console.log(someAgeOver30);