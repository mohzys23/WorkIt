const loginRouter = require('express').Router();
// const bcrypt = require('bcrypt');

const User = require('../models/User');


loginRouter.post('/login', async (request, response) => {

    console.log("User Data:", request.body)


    const user = await User.findOne({ email: request.body.email});
    
  const passwordCorrect = user.password === request.body.password ? user.password : false

 
  
    if (!(user && passwordCorrect)) {
      return response.status(401).json({
        error: 'invalid username or password'
      })
    }



	 
    console.log("logged in successfully")
    response
      .status(200)
      .send({  user_info: user })
      







})



module.exports = loginRouter;