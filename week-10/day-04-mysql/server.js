import express from 'express'

//get the client
import mysql from 'mysql2';
import dotenv from 'dotenv'

const app = express();
dotenv.config();

// ==== database. connection ==== //
// const connection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE,
// })

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

    // pool config
    waitForConnections: true,
    connectionLimit: 1,
    queueLimit: 0
})

// ==== API endpoint ==== //
app.get('/', (req, res) => {
    pool.query('SELECT * FROM country', (err, result) => {
        if (err) {
           // Handle the error
        // console.error("Database error", err);
        return res
        .status(500)
        .json({ errorMessage: "An error occurred while fetching data from the database.", error: err});
       } else {
        // Query was successful, send the result
        return res.send(result);
       }
    })
})

// exercise 1
app.get('/oceania', (req, res) => {
    pool.query('SELECT * FROM country WHERE continent = "Oceania" ORDER BY LifeExpectancy DESC LIMIT 10', (err, result) => {
       if (err) {
           // Handle the error
        // console.error("Database error", err);
        return res
        .status(500)
        .json({ errorMessage: "An error occurred while fetching data from the database.", error: err});
       } else {
        // Query was successful, send the result
        return res.send(result); 
       }
    })
})

// exercise 2
app.get('/country/:code', (req, res) => {
    const countryCode = req.params.code

    pool.query(`SELECT * FROM country WHERE code = "${countryCode}"`, (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ errorMessage: "An error occurred while fetching data from the database.", error: err })
        } else {
            return res.send(result);
        }
    })
})

// EXERCISE 3
app.get('/oceania/populationRank', (req, res) => {
    console.log(req.query.limit)
    const numOfResults = req.query.limit;

     pool.query(`SELECT * FROM country WHERE continent = "oceania" ORDER BY population DESC LIMIT ${numOfResults}`, (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ errorMessage: "An error occurred while fetching data from the database.", error: err })
        } else {
            return res.send(result);
        }
    })
})

// exercise 4 
app.get('/preparedStatement', (req, res) => {
    const query = `SELECT * FROM country WHERE LifeExpectancy >= ? AND continent != ?`

    pool.execute(query, [75, "Europe"], (err, result) => {
        if (err) {
            return res
                .status(500)
                .json({ errorMessage: "An error occurred while fetching data from the database.", error: err })
        } else {
            return res.send(result);
        }
    });
})

// exercise 5
app.get('/population/:continent', (req, res) => {
    console.log(req.params)
    const continent = req.params.continent;
    const query = `SELECT continent, SUM(population) AS sum_population FROM country GROUP BY continent HAVING continent = ?`

    pool.execute(query, [continent], (err, result) => {
         if (err) {
            return res
                .status(500)
                .json({ errorMessage: "An error occurred while fetching data from the database.", error: err })
        } else {
            return res.send(result);
        }
    })
})

// ==== PORT ====//
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
})
.on("error", (err) => {
    console.log(err);
})