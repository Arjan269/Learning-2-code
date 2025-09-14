// ====== Imported Packages ======= //
import express from 'express'; 
import dotenv from 'dotenv'; 
import customerList from './customerList.js'; 

const app = express(); 
dotenv.config(); 


// ========= userList Data ======== //
const userList = [
    { name: "John", age: 27 },
    { name: "Mary", age: 22 },
    { name: "Ethan", age: 17 },
    { name: "Joe", age: 53 },
    { name: "Amelia", age: 87 },
    { name: "Adam", age: 34 },
  ];


// ======== APIs/Endpoints ======== //

app.get('/', (req, res) => {
    res.send("<h1 style='color: blueviolet'>Hello World</h1>");
})

// ========== Exercise 1 ========= //
// Part 1
app.get('/api/about', (req, res) => {
    res.send(
        `<div>
            <h1>I'm Bonnie</h1>
            <h4>Enjoy this doggo coding</h4>
            <img alt="dog" src='https://media.tenor.com/9X-I0mcc_OgAAAAC/dog-funny.gif' />
        </div>`
    )
})

// Part 2
app.get('/api/contact', (req, res) => {
    res.send(`<h1>My details ✉️: bob@missionreadyhq.com</h1>`)
})


// ========== Sending back data ========= //
app.get('/api/userList', (req, res) => {
    res.json(userList);
})


// ======== Dynamic Routes with Params ======== //
app.get('/api/userList/:name', (req, res) => {
    console.log("The /api/userList/:name endpoint was hit 🎯");
    console.log(req.params); // Output: { name: 'Mary'} if the url accessed is http://http://localhost:4000/api/userList/Mary
    
    // Storing the name parameter grabbed from the url into a variable
    const requestedName = req.params.name; 
    
  
    const user = userList.find((user) => user.name.toLowerCase() === requestedName.toLowerCase())
    
  
    if (user) {
        return res.json(user)
    } else {
        res.status(404).json({ error: "User with that name not found" })
    }
    
})


// ========== Exercise 2 ========= //
app.get('/api/customerList/:customerId', (req, res) => {
    console.log("The /api/customerList/:customerId was hit");

    const requestedCustomerId = req.params.customerId;  

    const customer = customerList.find((customer) => customer.id === parseInt(requestedCustomerId)); 

    if (customer) {
        // res.json(customer);
       return res.send(`${customer.firstName} ${customer.lastName}`);
    } else {
       return res.status(404).json({ error: "Customer not found" });
    }
})


// =========== Query Params ============ //
app.get('/api/profile', (req, res) => {
    console.log("The /api/profile endpoint was hit 🎯");
    // The url used for these examples may look like this http://localhost:4000/api/profile?name=Mary&age=22
    const searchedName = req.query.name;
    const searchedAge = req.query.age; 


    // ===== Logic for trying to find a match using both name and age ===== //
    if (!searchedName && !searchedAge) {
        return res.status(404).json({ error: "Either a 'name' or 'age' query parameter must be provided" });
    }

    const profile = userList.find((user) => {

        return (!searchedName || user.name.toLowerCase() === searchedName.toLowerCase()) && (!searchedAge || user.age === parseInt(searchedAge));
    });

    if (profile) {
       return res.status(200).json(profile)
    } else {
        return res.status(404).json({ error: "User not found" })
    }

})



// ====== PORT ====== //
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`It's alive!!! at http://localhost:${PORT}`)
})
.on("error", (error) => {
    console.log(error)

    if (error.code === "EADDRINUSE") {
        console.log("Port is already in use, try a different port ot close other running servers")
    } else {
        console.log("Server error:", error)
    }

})
