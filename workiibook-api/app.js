// Require Express
const express = require('express');

const router = require('./routes');
// Create your react app
const app = express();
// Declear you port
const port = process.env.PORT || 3001;

// Mongodb connection
//require('./config/database');

// Apply JSON Middleware
app.use(express.json());

// Apply Router as Middleware
app.use(router);



// Make app listen on PORT
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});