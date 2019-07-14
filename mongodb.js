// CRUD
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to DB");
    }

    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
      description: "buy some food"
    }).then((result) => {
      console.log(result.deletedCount);
      
    }).catch((err) => {
      console.log(err);
    });



    // db.collection('users').deleteMany({
    //   age: 31
    // }).then((result) => {
    //   console.log(result)
      
    // }).catch((err) => {
    //   console.log(err)
      
    // });

    // db.collection("tasks")
    //   .updateMany(
    //     { completed: false },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: ObjectID("5d28bab342d295248cbdac99")
    //     },
    //     {
    //       $inc: {
    //         age: 33
    //       }
    //       // $set:{
    //       //   name: "grogo"
    //       // }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    // db.collection('users').findOne({_id: new ObjectID("5d288fc9f63cca2f9c6b9233")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({age: 31}).toArray((error, users) => {
    //     console.log(users);

    // })

    // db.collection('tasks').findOne({_id: new ObjectID("5d28b9d82b53492fc85c216a")}, (error, task) => {
    //     console.log(task);

    // })

    // db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks);

    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Gregory',
    //     age: 31
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert user");
    //     }

    //     console.log(result.ops);
    // })

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 30
    //     },
    //     {
    //       name: "Jojo",
    //       age: 70
    //     }
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // db.collection('tasks').insertMany([
    //     {
    //         description: "buy some food",
    //         completed: false
    //     },
    //     {
    //         description: "leart to exam",
    //         completed: true
    //     },
    //     {
    //         description: "drink water",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return 'Unable to insert tasks'
    //     }
    //     console.log(result.ops);

    // })
  }
);
