const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', port);
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abs123' }, 'this is my new pinese', {expiresIn: '7 days'})
//     console.log('token',token);
    
//     const data = jwt.verify(token, 'this is my new pinese')
//     console.log(data);

// }

// myFunction()