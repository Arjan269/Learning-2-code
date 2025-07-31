console.log("Jarvis initiate connection");

// A reminder of the syntax

// ==== Excercise 1 ==== //
const favFood = ["Lasagna", "Burgers", "Sushi", "Chicken katsu spicy Ramen"];
console.log(favFood);

// ==== Accessing element vaules ====//
console.log(favFood[3]);

console.log(`${favFood[0]} Is good but so are ${favFood[1]} I also love ${favFood[2]} and ${favFood[3]}.`);

// ==== Modifyung element vaules ==== //
const mountains =["Everest", "Fuji", "Taranaki"];
console.log(mountains);
console.log(mountains[0]);
console.log(mountains[1]);
console.log(mountains[2]);

mountains[2] = "Ruapehu";
console.log(mountains);

// ==== Array propertiy length ==== //
console.log("Array Propertiy length");
const names = ["Buddy", "Sally", "John"];
console.log(names.length);

// ===== Excercise 2 ==== //
console.log("Excercise 2");
const numbers = [5, 6, 7, 8, 9, 10];

console.log("total");
const total = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5];
console.log(total);

console.log("average");
const average = total / numbers.length;
console.log(average);

// ===== Adding an element to the array ==== //
console.log("adding t array");
const pokeballs = ["Lucario", "Charizard", "Mew", "Cinderace", "Greninja"];
console.log(pokeballs);

pokeballs.push("Pikachu");
console.log(pokeballs);

// Arrays with. objects
console.log("Arrays with objects inside");
const arrayOfObjects = [
    {
        name: "Phoebe",
        age:999,
        favAnimal: "Hamsters"
    }, 
    {
        name: "Bonnie",
        age: 21,
        favAnimal: "Capybara"
    },
];
console.log(arrayOfObjects[1]);
console.log(arrayOfObjects[1].favAnimal);
console.log(arrayOfObjects[0]["favAnimal"]);

// Excrsice 3
console.log("==== Excercise 3 ====");
const recipe = {
    name: "weet-bix and hot water",
    servings: 1,
    ingredients: ["4 weet-bix", "butter", "sugar to taste", "hot water"] 
};
console.log(recipe);
console.log(recipe.ingredients.length);

recipe.ingredients.push("Milk if you want");
console.log(recipe);

