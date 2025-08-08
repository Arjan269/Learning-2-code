console.log(
    `Jarvis Initiate Connection`
);

// the slow way

// const petName = "Fluffles";
// const species = "Dog";
// const age = 5;
// const weight = 25;
// const symptoms = ["Tired", "Swollen abdomen", "Restlessness"];
// const horizontalLine = "_________________________________";
// const examNotes = 
// "Fluffles is expecting puppies! Will admit to hospital for further monitoring";

// // Report

// const report = `Vet report for ${petName}.

// ${horizontalLine}

// ${petName} is a ${age} year old ${species}, weighing in at ${weight}kgs.

// ${petName} was brought in today and has the follwing symtoms: ${symptoms.join(
//     ","
// )}

// ${horizontalLine}

// Exam noes: ${examNotes}
// `;

// console.log(report);

// the better way

function buildReport(petObj, examName){

    const {petName, species, age, weight, symptoms} = petObj;

    const horizontalLine = "_________________________________";

    const report = `Vet report for ${petName}.

${horizontalLine}

${petName} is a ${age} year old ${species}, weighing in at ${weight}kgs.

${petName} was brought in today and has the follwing symtoms: ${symptoms.join(
    ","
)}

${horizontalLine}

Exam noes: ${examNotes}
`;

console.log(report);
}

// Calling the function

const fluffles = {
    petName: "Fluffles",
    species: "dog",
    age:5,
    weight: 35,
    symptoms: ["Tired", "Swollen abdomen", "Restlessness"],}


const flufflesNotes = "Fluffles is expecting puppies! Will admit to hospital for further monitoring";

buildReport(fluffles, flufflesNotes);


const miko = {
    petName: "Miko",
    species: "dog",
    age:1.5,
    weight: 20,
    symptoms: ["normal tempreture", "fleas", "briht eyed"],}


const mikosNotes = "Miko is due for a checkup - have given yearly vaccine and given her basic checkup. administered flea and worm treatment";

buildReport(miko, mikosNotes);

const snoopy = {
    petName: "snoopy",
    species: "dog",
    age:4,
    weight: 40,
    symptoms: ["normal tempreture", "fleas", "briht eyed"],}


const snoopysNotes = "snoopy is due for a checkup - have given yearly vaccine and given him basic checkup. administered flea and worm treatment";

buildReport(snoopy, snoopysNotes);

