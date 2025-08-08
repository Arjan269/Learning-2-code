// ===== Regex Homework ===== //
const emailToTest = "Ash@thepockemonclub.com";
const emailPattern = /\w+@\w+\.[a-z]+/
let emailAnswer = emailPattern.test(emailToTest);
console.log(emailAnswer); 

// Password
const passwordToTest = "AshRulz9";
const passwordPattern = /^[A-Z].{6,}\d$/
let passwordAnswer = passwordPattern.test(passwordToTest);
console.log(passwordAnswer); 