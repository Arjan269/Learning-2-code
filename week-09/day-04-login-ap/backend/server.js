import express from 'express';
import cors from 'cors';
const app = express();

// ==== Middleware ==== //
app.use(cors())
app.use(express.json())

// Dummy data 
const users = [
    { email: "rob@dvds.com", password: "rob123"},
    { email: "john@dvds.com", password: "john123"}
];

// ==== ENDPOINTs === //
app.get('/', (req, res) => {
    res.send("Root endpoint hit! 🎯");
})

// Login endpoint
app.post('/auth/sign-in', (req, res) => {
    console.log("The /auth/sign-in endpoint was hit 🎯");
    console.log(req.body);
    console.log(req.body.email);
    console.log(req.body.password);

    const userEmail = req.body.email;
    const userPassword = req.body.password;

//     const user = users.find((user) => {
//         return user.email === userEmail && user.password === userPassword
//     })

//     if (user) {
//         return res.sendStatus(200);
//     } else {
//         return res.sendStatus(401);
//     }
// })

    // Option 2: Checking email and password separately
    // NOTE: This is generally not considered best practice, as then hackers know if someone with that email exists 
    const user = users.find((user) => {
        return user.email === userEnteredEmail;
    })

    if (user) {
        // A user with the same email was found
        return user.password === userEnteredPassword ? res.sendStatus(200) : res.sendStatus(401);

    } else {
        // No users with that email were found 
        return res.sendStatus(404)
    };

})


//  ==== PORT ==== //
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is alive on https://localhost:${PORT}`)
})
.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
        console.log("Port is already in use, choose another or close other servers");
    } else {
        console.groupEnd(error);
    }
})