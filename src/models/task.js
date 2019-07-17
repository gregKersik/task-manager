const mongoose = require('mongoose')
const validator = require('validator')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false

    }
})

module.exports = Task

// const learnCode = new Task({
//     description: "learn to code", 
//     completed: true
// })

// learnCode.save()
//     .then(() => {
//         console.log(learnCode);
        
//     }).catch((err) => {
//         return console.log(err);
//     });