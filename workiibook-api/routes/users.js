const userRouter = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/User');


/**
 * request.body = {
 *  fullName: "",
 *  email: "",
 *  password: ""
 * }
 */
//  userRouter.get('/', (req, res) =>{
//      User.find({ })
//      .then({data} () => {
//          console.log('Data: ', data);
//          res.json(data);
//      })
//  })

userRouter.post('/signup', async (request, response) => {
    const UserData = request.body;

    const newuser = new User(UserData);

    newuser.save((error) => {
        if (error) {
            response.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // SignupPost
        return response.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });


    const new_password = bcrypt.hashSync(UserData.password, 10);
    newuser.password = new_password;

    await newuser.save()

    response.status(201).send({message: "User Created Successful"})
})


userRouter.post('/login', async (request, response) => {
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



module.exports = userRouter;