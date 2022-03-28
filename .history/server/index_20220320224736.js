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

app.post('/fish', (req, res) => {

    const search = req.body.search;
    const searchTemp = "";
    const sqlSelect = "SELECT * FROM tbltetra WHERE tetraCommonName LIKE '%tetra%'";

    console.log(search);

    db.query(sqlSelect, (err, result) =>{
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

app.listen(3001, ()=>{
    console.log("Server running on port 3001");
});