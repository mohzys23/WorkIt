const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname: {
        required: true,
        type: String
    },
    lastname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    }
})



userSchema.set('toJSON', {
    transform: (document, returnedUser) => {
        returnedUser.id = returnedUser._id.toString();
        delete returnedUser._id;
        delete returnedUser.__v;
        delete returnedUser.password;
    }
})


const User = mongoose.model('User', userSchema);



module.exports = User;