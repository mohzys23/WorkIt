const signupRouter = require('express').Router();
// const bcrypt = require('bcrypt');

const User = require('../models/User');


/**
 * request.body = {
 *  fullName: "",
 *  email: "",
 *  password: ""
 * }
 */

signupRouter.get('/', async (request, response, next) => {

// check if user already exist 

  // const users = await User
  // .find({}).populate('notes', { content: 1, date: 1})
  
  
  // this is to serve something in the future 
  
  
  
 // response.json(users.map(user => user.toJSON()))
  
  response.json("Nothing to get for now only posts are recieved ")
})



signupRouter.post('/signup', async (request, response) => {

     const {firstname, email, lastname, password} = request.body;

     const user = new User({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        
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



    // const new_password = bcrypt.hashSync(password, 10);
    // user.password = new_password;

    console.log("Signup data saved");

})





module.exports = signupRouter;