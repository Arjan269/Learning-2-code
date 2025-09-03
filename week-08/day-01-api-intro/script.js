console.log(`Jarvis Initiate Connection`);

const theObject = {name: "John", age: 30};
const jsonData = JSON.stringify(theObject);

console.log(jsonData, typeof jsonData);

const data = JSON.parse(jsonData);
console.log(data, typeof data);

// ==== Fetch Api ==== //
fetch("https://reqres.in/api/users", {
    headers: {"x-api-key": "reqres-free-v1"}
})
.then ((response) => response.json())
.then((result) => console.log(result.data[2].email));


// ==== Button 1: Fetch data to the console ==== //
function fetchData() {
    fetch("https://reqres.in/api/users")
    .then((response) =>response.json())
    .then((result) => console.log(result.data))
}

// ==== Button 2; Fetch data and display ==== //
const displaySection = document.getElementById("display-section");

function fetchDataAndDisplay() {
    fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((result) => result.data.map((user) => {
        return displaySection.innerHTML += 
        `<div>
            <img src='${user.avatar}' alt="avatar"/>
            <h4>${user.first_name} ${user.last_name}</h4>
        </div>` 
    }))    
}