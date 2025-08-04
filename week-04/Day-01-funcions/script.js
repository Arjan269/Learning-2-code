console.log("Jarvis initiate connection");


// demonstration
// function myFirstFunction() {
    // console.log('I just called my first function')
// };

// ==== Declare function ==== //
function myFunctionBringsAllTheBoysToTheYard() {
    console.log("My function brings all the boys to the yard");
};

//Call the function
myFunctionBringsAllTheBoysToTheYard();

// ==== Function with paramaters ==== //
function callUserName(name, age) {
    console.log(`You clicked ${name} they are ${age} years old.`)
};

callUserName("Megumi", 16);

function sum(num1, num2) {
    console.log(num1 + num2);
};

sum(3, 4);

sum(10, 2);

console.log("==== Excercise 1 ====");
function showMyBrekkie(food1, food2, food3) {
    console.log(`I had ${food1} and ${food2} for breakfast with a hot ${food3}.`);
};

showMyBrekkie("Bacon", "eggs", "coffee");

// ==== Retur statement ==== //
console.log("==== Return Statement ====");
function sumNums(num1, num2) {
    return num1 + num2;
};
console.log(sumNums(3, 4));

const sumResults = sumNums(3, 4);

if (sumResults === 7) {
    console.log("The answer is right");
} else 
    {console.log("The answer is wrong");
};

// functon expression - storing h function into a variable 

const funcWithParamsExpression = function (num1, num2) {
    return num1 + num2;
};

console.log(funcWithParamsExpression(10, 11));

console.log("==== Excercise 2 ====");
function isStrEmpty(str) {
    if (str === "") {
        console.log("This string is empty");
        return true;
    } else {
        console.log("The string is not empty");
        return false
    };
}
console.log(isStrEmpty(""));
console.log(isStrEmpty(" "));

console.log("==== Ternary ====");
function isStringEmpty(string) {
    return string === "" ? true : false;
};
console.log(isStringEmpty(""));
console.log(isStringEmpty(" "));

// Methods - functions in objects
const person = {
    firstName: "Johm",
    lastName: "Doe",
    greetings: function (name) {
        console.log(`Hi ${name}, Nice day for fishing ain't it.`)
    }
};

person.greetings("Yuji Itadori");

console.log("==== Excercise 3 ====");
function halfNumber(num) {
    return num / 2
};

console.log(halfNumber(5));

const halvedNumber = halfNumber(5);

console.log(`Half of 5 is ${halfNumber(5)}.`);

// ==== Part 2 ==== //

// function timeInSeconds(minutes) {
//     return minutes * 60;
// }
// let input = prompt("Enter time in minutes: ");
// let minutes = Number(input);

// console.log(`That is ${timeInSeconds(minutes)} seconds.`);

