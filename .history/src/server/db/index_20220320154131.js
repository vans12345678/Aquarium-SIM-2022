import * as mysql from 'mysql';

const Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

Connection.connect(err => {
    if(err) console.log(err);
});

