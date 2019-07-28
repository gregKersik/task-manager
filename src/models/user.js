const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true
    },
    email: {
        type: String, 
        required: true,
        unique: true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, 'this is my new life')

    user.tokens = user.tokens.concat({ token })
    await user.save()

    return token
}

userSchema.statics.findByCredintials = async (email, password) => {
    const user = await User.findOne({email})
    
    if (!user) {
        throw new Error('Unable to Login')
    }

    const isMathc = await bcrypt.compare(password, user.password)
    if (!isMathc) {
        throw new Error('Unable to Login')
    }

    return user
}

// Hash the plain text password before saving
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