const mysql = require('mysql')

//MySQL Connection
module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup_test"
});