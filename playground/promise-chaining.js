require("../src/db/mongoose");
const User = require("../src/models/user");

// 5d29ba312a60be109cf9ad17

// User.findByIdAndUpdate("5d29ba89ebdd8b0df0b66c9b", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age: age }); // {age}
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("5d29ba312a60be109cf9ad17", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
