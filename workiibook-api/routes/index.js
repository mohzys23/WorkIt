// Requir Express
const Router = require('express').Router;

// Requires book router
//const booksRouter = require('./books');

//  Requires author router
const usersRouter = require('./users');

// Require admin router
//const adminRouter = require('./admin');

const router = Router();



//Home Route
router.use('/', (req, res) => {
    res.send('Api home router');
});


// router.post('/login', (req, res) => {
//     console.log('Body: ', req.body);
//     res.json({
//         msg: 'We received your data'
//     });
// });

// Users Route
router.use('/users', usersRouter);


// Books Route 
//router.use('/books', booksRouter);


// Admin route
//router.use('/admin', adminRouter);



module.exports = router;
