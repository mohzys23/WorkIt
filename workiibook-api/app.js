// Require Express
const express = require('express');

const router = require('./routes');
// Create your react app
const app = express();
// Declear you port
const port = process.env.PORT || 3001;


const cors = require('cors')

const http = require('http')

// Mongodb connection
require('./config/database');

// Apply JSON Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Apply Router as Middleware
app.use(router);


const server = http.createServer(app);

app.use(cors());

// // Make connection to the database
// mongoose.connect(config.MONGODB_URL, config.MONGODB_OPTIONS)
// .then(()=> {
//     console.log("Conneciton successfull")
// })


// Make app listen on PORT
server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});