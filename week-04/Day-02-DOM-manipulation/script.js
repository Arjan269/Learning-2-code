console.log(`Jarvis initiate connection`);

// // chaning the h1 on the body
// document.body.innerHTML = " <h1>Hello World</h1>";
// // changing the background color on the body
// document.body.style.background = "cornflowerblue";
// document.body.style.backgroundColor = "grey";


// ==== changing colours - 2 colours====///
function changeColour() {

    if (document.body.style.backgroundColor === "cornflowerblue") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "cornflowerblue";
    }
}

// ==== changing colours multicolours ====//
let currentColourIndex = 0;

function changeMultiColour() {
    const colourArray = ["pink", "blue", "red", "green", "yellow", "orange", "deeppink"];

    document.body.style.backgroundColor = colourArray[currentColourIndex];
    if (currentColourIndex === colourArray.length - 1) {
        currentColourIndex = 0;
    } else {
        currentColourIndex++;
    };

}

// ==== Accessing other HTML elements ==== //
// ==== Getting element by id ==== //
document.getElementById("header-id").style.color = "blue";

const headerEl = document.getElementById("header-id");

headerEl.style.backgroundColor = "yellowgreen";
headerEl.style.fontSize = "60px";
headerEl.textContent = "Look, my text magically changed.";

// ==== Query Selector === //
document.querySelector("h1").textContent = "My title has canged!✨";

document.querySelector(".header-class").textContent = "This has been selected using a class.";

document.querySelector("#header-id").style.fontFamily = "Tahoma";

// ==== Query Selector All === //
// const paragraphs = document.querySelector(".paragraph-triplets");
// paragraphs.style.color = "red";
const paragraphs = document.querySelectorAll(".paragraph-triplets");

console.log(paragraphs);
// paragraphs[0].style.color = "blueviolet";
// paragraphs[1].style.color = "blueviolet";
// paragraphs[2].style.color = "blueviolet";
for (let i =0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blueviolet"
}
for (const paragraph of paragraphs) {
    paragraph.style.color = "orange";
    paragraph.style.fontSize = "30px";
}

// ==== Excercise 1 - Counter ==== //
let count = 0;
const counterButton = document.getElementById("counter-value");

function counter() {
    console.log("Adding to count");
    count++;
    counterButton.textContent = count;
}

// not using span
function counter() {
    count++;
    counterButton.textContent = `Count: ${count}`;
}