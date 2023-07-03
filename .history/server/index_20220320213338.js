const express = require('express');
require('dotenv').config();
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.get('/fish', (req, res) => {

    const search = req.body.search;
    console.log("!!!!!!!!!!!!!!" + search);

    db.query("SELECT * FROM tbltetra", (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        els
        {
            res.send(result);
        }
    })
});

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
});