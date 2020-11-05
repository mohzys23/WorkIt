// Require Express Router
const Router = require('express').Router;
// Require Controller
//const controller = require('../controllers/users');

// Instantiate Router
const router = Router();

// Get All users
router.get('/', (res, req) => {
        res.send('Welcome Moses');
    });


//Get users by ID one
router.get('/:userID', (res, req) => {
    res.send("Here is a user");
});

// Create New users
//router.post('/', controller.createUser);

// Delete A users
//router.delete('/:userID', controller.deleteUserById);


module.exports = router; // Requir Express
