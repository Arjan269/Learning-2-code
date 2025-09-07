console.log(`Jarvis Initiate Connection`)

// ==== promises ==== //
// console.log(fetch("https://reqres.in/api/user"));

// Coffee example
const coffee = new Promise((resolve, reject) => {
    const isEverythingOk = true;

    if (isEverythingOk) {
        resolve("Operation successful: Coffee delivered ☕️");
    } else {
        reject("Operation failed: Coffee denied 🙅‍♀️")
    }
})

console.log(coffee);

coffee
    .then((result) => {
        console.log(result);
        console.log(`The Coffee has been made`);
    })
    .catch((error) => {
        console.log(error);
        console.log(`Ran out of milk`);
    })

    // ===== Why we need 2x .then() ==== //
fetch("https://reqres.in/api/user", {
    headers: {"x-api-key": "reqres-free-v1"}
})
    .then((response) => response.json())
    .then((result) => console.log(result))

fetch("https://pokeapi.co/api/v2/pokemon")
    .then((response) => response.json())
    .then((result) => {console.log(result.results[5].name)})
    .catch((error) => {console.log(error)})

// ==== Async and await ==== //
async function asyncFunction() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon")
    console.log(response);

    const result = await response.json()
    console.log(result.results)
}

// console.log(asyncFunction());
asyncFunction();

// ==== Exercise 2 ==== //

async function asyncFunction1() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const result = await response.json();
    console.log(result[3].address.city);
}

asyncFunction1();

// try and catch 
async function badFetch() {

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        // const response = await fetch("https://jsonplaceholder.typicode.com/userz")
        console.log(response.ok)

        if (response.ok === false) {
            throw new Error("Do you need a map, what you are looking for can't be found")
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error);
        alert(error)
    } finally {
        console.log(`This is the end of the fetch`);
    }


}

badFetch();


// ==== Exercise 3 ==== //
async function pokeFetch() {

    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        console.log(response);

        if (response.ok === false) {
            throw new Error("Gotta catch em all")
        }

        const result = await response.json();
        console.log(result);

    } catch (err) {
        console.log(err);
        alert(err);
    } finally {
        console.log(`Did you catch them all`);
    }


};

pokeFetch();