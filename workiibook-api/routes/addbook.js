const addbookRouter = require('express').Router();

const User = require('../models/User');


/**
 * request.body = {
 *  fullName: "",
 *  email: "",
 *  password: ""
 * }
 */

addbookRouter.get('/', async (request, response, next) => {

// check if user already exist 

  // const users = await User
  // .find({}).populate('notes', { content: 1, date: 1})
  
  
  // this is to serve something in the future 
  
  
  
 // response.json(users.map(user => user.toJSON()))
  
  response.json("No book aded yet ")
})



addbookRouter.post('/signup', async (request, response) => {

    const {title, author, bookcover, bookfile} = request.body;;

     const user = new User({
        title: title,
        authoe: author,
        bookcover: bookcover,
        bookfile: bookfile,
        
    })

    user.save((error) => {
        if (error) {
            response.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // SignupPost
        return response.json({
            msg: 'Your data has been saved!!!!!!'
        });
       
       
    }); 



    console.log("Signup data saved");

})




module.exports = addbookRouter;