const loginRouter = require('express').Router();
// const bcrypt = require('bcrypt');

const User = require('../models/User');


loginRouter.post('/login', async (request, response) => {

console.log(request.body.data);
console.log(request.body.data['email']);

 const { email, new_data} = request.body.data;
 console.log(email)
 console.log(new_data)
 const body = request.body.data



  const user = await User.findOne({ email: body['email']});

  const passwordCorrect = user.password === body['password'] ? user.password : false

 
  
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