// Require Express

const express = require('express')
const bodyParser = require('body-parser')


const loginRouter = require('./routes/login')
const signupRouter = require('./routes/signup')
const addbookRouter = require('./routes/addbook')
const HomeRouter = require('./routes/home')

const app = express()
// Declear you port
const port = process.env.PORT || 5000;


const cors = require('cors')

// Mongodb connection
require('./config/database');

// Apply JSON Middleware
app.use(express.json());

// parse application/x-www-form-urlencoded for picking data or params
// in post request of forms 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.use(cors());


app.use('/signup', signupRouter)


app.use('/login', loginRouter)


app.use('/addbook', addbookRouter)

app.use('/', HomeRouter)

// Make app listen on PORT
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});