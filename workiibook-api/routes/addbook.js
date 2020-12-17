const addbookRouter = require('express').Router();

const Book = require('../models/Addbook');


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



addbookRouter.post('/addbook', async (request, response) => {

    const {title, author} = request.body;

     const book = new Book({
        title: title,
        author: author,
        // bookcover: bookcover,
        // bookfile: bookfile,
        
    })

    book.save((error) => {
        if (error) {
            response.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // SignupPost
        return response.json({
            msg: 'Your book data has been saved!!!!!!'
        });
       
       
    }); 



    console.log("book data data saved");

})




module.exports = addbookRouter;