const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');


loginRouter.post('/login', async (request, response) => {

    console.log("User Data:", request.body)
    
    await User.findOne({email: request.body.email}, (error, user)=> {
        if (error) {
            return response.status(500).send({error: "Internal Server Error"})
        }

        
        if (!user) {
            return response.status(401).send({email: "No user with that email"})
        }

        const valid = bcrypt.compareSync(request.body.password, user.password);

        if (!valid) {
            return response.status(401).send({password: "Invalid Password"})
        }
        
        return response.status(200).send({message: "Login Successfull"})
    })
})



module.exports = loginRouter;