const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', async function(next) {
    const user = this

    if (user.isModified('password')) {
        console.log('just before saving 2');
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log('just before saving 1' );
    next()
})

const User = mongoose.model('User', userSchema)

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