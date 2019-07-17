const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('Age must be a postive number')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value){
            if (validator.contains(value.toLowerCase(), 'password')) {
                throw new Error("Password must not contain 'password'")
            }
        }
    }
})

module.exports = User;



// const me = new User({
//     name: 'Greg',
//     email: 'greg@gmail.com',
//     password: '123421'
// })

// me.save().then(() => {
//     console.log(me);
    
// }).catch((err) => {
    
//     console.log(err);
// });