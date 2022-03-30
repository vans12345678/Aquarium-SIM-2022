const express = require('express');
require('dotenv').config();
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(express.json());


// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

app.post('/fish', urlencodedParser, (req, res) => {

    const search = req.body.search;
    const searchTemp = "%"+search+"%";
    const sqlSelect = "SELECT * FROM tblfishmatches WHERE fishMatchCommonName LIKE ?";

    console.log(search);

    db.query(sqlSelect, searchTemp, (err, result) =>{
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

app.post('/fishComp', urlencodedParser, (req, res) => {

    const search = req.body.search;
    const searchTemp = "%"+search+"%";
    const sqlSelect = "SELECT * FROM tblfish WHERE fishCommonName LIKE ?";

    console.log(search);

    db.query(sqlSelect, searchTemp, (err, result) =>{
        if(err)
        {
            console.log(result);
            console.log(err);
        }
        else
        {
            res.send(result);
        }
    })
});

app.post('/currentFishGet', urlencodedParser, (req, res) => {

    const search = req.body.search;
    const searchTemp = "%"+search+"%";
    const sqlSelect = "SELECT * FROM tblfish WHERE fishScientificName LIKE 'Aequidens diadema'";

    db.query(sqlSelect, searchTemp, (err, result) =>{
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

app.post('/fishAll', (req, res) => {

    const sqlSelect = "SELECT * FROM tblfishmatches";

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

app.get('/fishGet', (req, res) => {

    const sqlSelect = "SELECT * FROM tblfish";

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