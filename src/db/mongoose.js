const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const learnCode = new Task({
    description: "learn to code", 
    completed: true
})

learnCode.save()
    .then(() => {
        console.log(learnCode);
        
    }).catch((err) => {
        return console.log(err);
    });
    




// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Greg',
//     age: 31
// })

// me.save().then(() => {
//     console.log(me);
    
// }).catch((err) => {
    
//     console.log(err);
// });