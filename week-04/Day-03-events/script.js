console.log(`Jarvis iniiate connection`);

// Selecting our elements -----
document.querySelector("#div-id");
document.getElementById("div-id");

// Storing it into a variable
const myDiv = document.getElementById("div-id");
const myH1 = document.querySelector("#h1-id");
const inputEl = document.querySelector('input');
const characterCount = document.getElementById("character-count");


// Adding an event listener 
myDiv.addEventListener('mouseover', function () {
    myDiv.style.backgroundColor = "blueviolet";
});

function changeToColor(event) {
    console.log(event);
    event.target.style.backgroundColor = "pink";
    //myDiv.style.backgroundColor = "pink";
}

myDiv.addEventListener('mouseout', changeToColor);

myH1.addEventListener('click', changeToColor);

function logValue(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.value.length);
    characterCount.textContent = e.target.value.length;
}

inputEl.addEventListener('input', logValue);

// ==== Excercise 2 ==== //
//selectiong the elements
const num1 = document.getElementById("input-num1");
const num2 = document.getElementById("input-num2");
const result = document.getElementById("result");
const sumBtn = document.getElementById("sum-btn");

//Adding event listener
sumBtn.addEventListener('click', function () {
    console.log(num1.value);
    console.log(num2.value);
    console.log(num1.value + num2.value);
    result.textContent =` Result: ${num1.value} + ${num2.value} = ${Number(num1.value) + Number(num2.value)} `
});