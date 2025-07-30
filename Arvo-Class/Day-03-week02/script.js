console.log("Jarvis initiate connection");
// Excercise 1
const num1 = 10;
const num2 = 10;

// (num1 > num2) ? console.log("num1 is greater than num2") : console.log("num1 is not greater than num2");

if (num1 > num2) { 
    console.log("num1 is greater than num2")
} else if (num1 === num2) {
    console.log("num1 is equal to num2")
}else {
    console.log("num1 is not greater than num2")
}

//excercise 2
const str1 = "apple";
const str2 = "banana";

str1 === str2 ? console.log("str1 and str2 are the same") : console.log("str1 and str2 are not the same");

//excercise 3
const name = "Arjan"
const age = 28

console.log(`${name} is ${age} years old.`);

//excercise 4
const movieName = "Star Wars: Episode I - The Phantom Menace";
const movieType = "Family/Sci-fi";
const releaseYear = 1999;

console.log(`${movieName} (${movieType}) was released in ${1999}.`);
