console.log(`Jarvis initiate connection`);

// function printer() {
//     const paper = "the NY Times";
//     console.log(`from within the printer function ${paper}`);
// }

// printer();
// console.log(`from outside the function try to log paper function ${paper}`);

// function scanner() {
//     console.log(paper)
// }

// scanner();

// ==== Block Scope ==== //

// function printer() {
//     let paper = "The NY Times";

//     if (true) {
//         console.log(paper);
//         let advert = "Cap for Sale"
//     } 

//     console.log(advert);
// }

// printer();

// ========= Block Scope Example 2======== //
console.log("======= Block Scope ========");

function house () {
    const dinner = "Mom's recipe";

    // block scope
    if(true) {
        console.log(`Maybe I will bring ${dinner} into my room`);
        let phoebesSecret1 = "diary 📔";
        var phoebesSecret2 = "stray cat 🐈";
    }

    console.log(phoebesSecret2);
};

house();

let writingInstrument = 'pen';

function compose() {
    console.log(writingInstrument);
}

compose();

// ------------------------------------- //
const myName = "Bonnie";

function sayHi() {
    const myName = "Phoebe";
    console.log(`${myName} says good morning`);

    function sayHi2 () {
        console.log(`${myName} says good morning`);
    }
 
    sayHi2();
 
}

sayHi();
// sayHi2();

