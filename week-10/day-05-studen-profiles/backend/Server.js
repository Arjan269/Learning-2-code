import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
dotenv.config();

// ==== Middleware ==== //
app.use(cors());

// ==== Database connection ==== //
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0
})

// API Endpoint
app.get('/', (req, res) => {
    res.send("Hit the root endpoint");
})


app.get('/users', (req, res) => {

    pool.query("SELECT name, images, id FROM team_mate", (err, result) => {
        if (err) {
            return res.status(500).json({ errorMessage: "error fetching data", error: err })
        } else {
            return res.json(result);
        }
    })

})


// PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
})
.on("error", (err) => {
    console.log(err);
})