const express = require('express')
const app = express()
const db = require('./database') 
const cors = require('cors')

app.use(express.json());
app.use(cors())

//LOGIN
app.get ('/login', (req, res) => {
    
    const username = req.body.username
    const password = req.body.password
    
    db.query(
        'SELECT * FROM users WHERE username = ? and password = ?',
        [username, password],
        (err, res) => {
        console.log(res);
    })
    
})

//REGISTER 
app.post ('/register', (req, res) => {

    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    
    db.query(
        'INSERT INTO users (username, email, password) VALUES (?,?,?)',
        [username, email, password],
        (err, res) => {
        console.log(res);
    })
});

app.listen(5000, () => {console.log('Server started on port 5000')})