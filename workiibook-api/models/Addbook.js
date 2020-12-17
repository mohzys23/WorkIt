const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    title: {
        required: true,
        type: String
    },
    author: {
        required: true,
        type: String
    },
    // bookcover: {
    //     required: true,
    //     type: String
    // },
    // bookfile: {
    //     required: true,
    //     type: String
    // }
})



userSchema.set('toJSON', {
    transform: (document, returnedUser) => {
       returnedUser.id = returnedUser._id.toString();
        delete returnedUser._id;
        delete returnedUser.__v;
    }
})


const Book = mongoose.model('Addbook', userSchema);



module.exports = Book;