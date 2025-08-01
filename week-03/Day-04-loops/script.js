console.log("Jarvis initate connection");

// ==== Excercise 1 ==== //
console.log("==== Excercise 0 ====");
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("==== For Loop ====")
for (let i = 0; i < 5; i++) {
    console.log(i+1);
};

console.log("with 1 < 6")
for (let i = 1; i < 6; i++) {
    console.log(i);
};

console.log("with <=")
for (let i = 1; i <= 5; i++) {
    console.log(i+1);
};

console.log('==== Excercise 1 ====')

console.log("For Loop to 10");
for (let i = 0; i < 10; i++) {
    console.log(i+1)
};

console.log('with 1 < 11');
for (let i = 1; i < 11; i++) {
    console.log(i)
};

console.log("with <=");
for (let i = 1; i <=10; i++) {
    console.log(i)
};

console.log("==== Excercise 2 ====");
for (let i = 10; i >= 1; i--) {
    console.log(i)
};

console.log("Test ends at 2");
for (let i = 10; i > 1; i--) {
    console.log(i)
};

console.log("Test starts at 11 ends at 1 with i-1");
for (let i = 11; i > 1; i--) {
    console.log(i-1)
};

console.log("==== Excecise 3 ====");
const myString = "Responsiveness";
for (let i = 0; i < myString.length; i++) {
    console.log(myString[i])
}

console.log("==== Excercise 4 ====");
const foods = ["salad", "pie", "pickles", "scones"];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
    console.log(` I Like ${foods[i]}.`);
}

// ==== For of Loop ==== //
console.log("==== for of loop ====");
const cars = ["tesla", "jaguar", "ford"];

for (const car of cars) {
    console.log(car);
};

console.log("==== Excercise 5 ====");
const breakfast = ["bacon", "pie", "eggs", "pancakes"];
for (const breaky of breakfast) {
    console.log(`I like ${breaky}.`);
};

// ==== Prompt ====
console.log("==== Prompt ====")
// prompt("What's the time Mr Wolf", "E.g 12:00am");
console.log("Prompts are annoying when coding");

// let message = prompt("What are the winning lotto ticket numbers", "e.g idk you're the one with the numbers");
// console.log(message);
// console.log(Number(message));
// console.log(parseInt(message));
// console.log(parseFloat(message));

console.log("==== Excercise 6 ====");
// let age = prompt("How old are you?", "e.g 22");
//  console.log(age, typeof age);

// if (Number(age ) >= 18) {
//     console.log("User can vote")
// } else if (Number(age) < 18) {
//     console.log("User cannot vote")
// } else {
//     console.log("Invaild User data")
// }; 
console.log("prompt gave User can vote");

// ==== While Loop ==== //
console.log("==== While Loop ====");
// let guess;
// const secretNumber = 3;

// while (guess !== secretNumber) {
//     guess = Number(prompt("Guess a number"));
//     console.log(`Your guess was ${guess}`);
// };

// ==== Excercise 7 ==== //
console.log("==== Excercise 7 ====");
// let guess;
// const secretNumber = 7;

// while (guess !== secretNumber) {
//     guess = Number(prompt("Guess a number"));
//     console.log(`Your guess was ${guess}`);
// if (guess > secretNumber) {
//     console.log(`your guess of ${guess} was incorrect try a lower number`)
// } else if (guess === secretNumber) {
//     console.log(`your guess of ${guess} was Correct Congradulations`)
// } else {
//     console.log(`your guess of ${guess} was incorrect try a higher number`)
// }
// };

// ==== Continue and Break ==== //
console.log("==== Continue and Break ====");

console.log("Basic");
for (let i = 1; i <=5; i++) {
    console.log(i);
};

console.log("Continue");
for (let i = 1; i <=5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
};

console.log("Break");
for (let i = 1; i <=5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
};

// ==== Breaks in While Loop ==== //
// ======== Breaks in while loops ======= //
 console.log("====Breaks in while loops =====");
 
 let x = 0;

 while(true) {
    if (x === 3) {
        console.log("x is now 3");
    }
    if (x === 10) {
        console.log("x is now 10");
    }
    if (x === 15) {
        console.log("x is now 15, goodbye...");
        break;
    }
    // console.log(x)
    x++;
 };

 console.log("==== Excerciise 8 ====")
 const string = "Hell@ the#e";

 for (let i = 0; i < string.length; i++) {
    
    if (string[i] === "!" || string[i] == "$" || string[i] == "@" || string[i] == "#") {
        console.log(`Error: invaild symbol in string ${string[i]}, No symbols allowed please try again.`);
        break;
    } 
    console.log(string[i]);
 };

 // ==== For In Loop ==== //
 console.log("==== For In Loop ====")
 const student = {
    name: "Rob",
    age: 5,
    isAdmin: true,
 };

 for (const key in student) {
    console.log(key);
    console.log(student[key]);
 };

 console.log("==== Excercise 9 ====")
 const worker = {
    name: "john",
    age: 50,
    isAdmin: true,
 };

 for (const key in worker) {

    if (key === "age"){
    console.log(worker[key])};
 }