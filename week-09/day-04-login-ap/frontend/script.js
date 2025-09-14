console.log(`Jarvis initiate connection`);

// Select the elements
const form = document.getElementById("login-form"); 
const emailInput = document.getElementById("email"); 
const passwordInput = document.getElementById("password"); 
const loginResultDiv = document.getElementById("login-result"); 

// Add an event listener to the form
form.addEventListener('submit', sendLogin);

// Login Function
function sendLogin(e) {
    e.preventDefault();
    console.log("Submit event fired 🎯");

    // Fetch request to send the form data to the backend
    fetch("http://localhost:4000/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        })
    })
    .then((res) => {
        console.log(res);

        if (res.status === 200) {
             // Login was successful 
            loginResultDiv.innerHTML = `<h3 style="color: green">Login successful! 🥳</h3>`
        } else if (res.status === 401) {
            // Login failed due to incorrect password 
            loginResultDiv.innerHTML = `<h3 style="color: red">Incorrect password! 😰</h3>`
        } else if (res.status === 404) {
            // Login failed due to no user with that email
            loginResultDiv.innerHTML = `<h3 style="color: red">No user with that email exist! 😰</h3>`
        }
    })
    .catch((error) => console.log(error))



}