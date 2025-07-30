console.log("Jarvis initiate connection");

const animal = "Capybara";

console.log(animal);

// Creating an object
const dog = {
    name: "Fido", 
    weight: 40,
    breed: "mixed",
    loves: ["walks", "fetching a ball"],
};

console.log(dog)

console.log("==== excercise 1 ====");
const cat = {
    firstName: "Gonpachiro",
    lastName: "Kamaboko",
    bestFriendo: "Inosuke",
    favFood: "Onigiri",
    favColour: "Green" ,
    loves: ["Spending time with his friends and family, practicing his headbutt"],
};

console.log(cat);
console.log(cat.firstName, cat.lastName)
console.log("This is " + cat.firstName + " " + cat.lastName + ", ann their favourite colour is " + cat.favColour + ".");

console.log(
    `My cats name is ${cat.firstName} ${cat.lastName} their favourite colour is ${cat.favColour}.`
);

console.log(
    `My cat ${cat.firstName} ${cat.lastName} fights demons and eats ${cat.favFood}.`
);

// if (dog.weight > 25) {
//     alert("WOOF")
// } else {
//     alert("Yip")
// };

// Alerts


console.log("===== Excercise 2 =====");
console.log(cat["firstName"]); 

let address = {
    "street no": 115,
    street: "Queen Street",
    suburb: "Auckland CBD",
    city: "Auckland"
};

console.log(address["street no"]);

console.log("==== Excercise 3 ====");
const rectangle = {
    length: 10,
    width: 50,
};

const area = (rectangle["length"] * rectangle["width"]
);

console.log(area);
console.log(`The area of the rectangle = ${area}m2.`   
); 

const person = {
    firstName: "John",
    lastName: "Doe",
};

console.log(person);
console.log("==== adding new name ====");
person.firstName = "Jane";
console.log(person);

// adding new propertiy
console.log("==== adding new property ====");
person.favouriteColoure = "Purple";
console.log(person);

console.log("==== removing a propertiy ====");
delete person.lastName;
console.log(person);

console.log("==== Excercise ====");
// 1 - create a object
const Person = {
    firstName: "John",
    lastName: "Doe",
    favouriteNumber: 21,
    favouriteDay: "Friday",
};

// 2 - loggging the object
console.log(Person);

// 3 - adding a new propertiy
Person.favFood = "Lasagna";

// 4 - logging the object
console.log(Person);

//5 - deleteing a property
delete Person.favouriteDay;

// 6 - logging the object
console.log(Person);

// 7 - modifying a property
Person.favouriteNumber = (Person.favouriteNumber * 2);

// 8 - logging the object
console.log(Person);