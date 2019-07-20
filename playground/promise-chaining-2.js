require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5d2f61975b4fc330cc67314e').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed: true})
// }).then((result)=> {
//     console.log(result);
// })

const deleteTaskAndCount = async (id, isCoplete) => {
    const user = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: isCoplete})
    return count
}

deleteTaskAndCount('5d2f61c94a98172ed0d6bc0e', false)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });