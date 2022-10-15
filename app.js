const express = require("express");

const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MYSQL CONNECTED")
    }
})
// Define Routes

app.use('/auth', require('./routes/auth'));

app.listen(5000)