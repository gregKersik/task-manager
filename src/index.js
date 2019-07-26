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

// const bcrypt = require('bcrypt')

// const myFunction = async () => {
//     const password = 'Res123565!'
//     const heshedPssword = await bcrypt.hash(password, 8)

//     console.log(password);
//     console.log(heshedPssword);

//     const isMatch = await bcrypt.compare('Res123565!', heshedPssword)
//     console.log(isMatch);
// }

// myFunction()