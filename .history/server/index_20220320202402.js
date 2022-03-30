const express = require('express');
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
    db.query("SELECT * FROM tbltetra", (err, result) =>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});