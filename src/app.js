// task :

// insertOne  2
// insertMany 10   5 of them have the same age 27 y
//  find   match  27 y  
//  limit first 3    27y 
//  $set name for the first 4
//  $inc age for the first 4
//  updateone for 1  inc age 5
//  updateMany  inc age 10
//  deleteMany  age 41   ==>> deletedCount 
//////////////////////////////////////////////////////////////////////////////////////////////////////
const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const connectionUrl = 'mongodb://127.0.0.1:27017';
const dbname = "4-4-2023";

mongoClient.connect(connectionUrl, (error, res1) => {
  if (error) {
    return console.log('error has occured');
  }
  console.log('All Perf');

  const db = res1.db(dbname);

  // insertOne
  db.collection('users').insertOne({
    name: 'islam',
    age: 26
  }, (error, data) => {
    if (error) {
      console.log('Unable to insert Data');
    }
    // console.log(data.insertedId);
  });

  // insertMany
  db.collection('users').insertMany([
    {
      name: 'islam',
      age: 20
    },
    {
      name: 'adel',
      age: 30
    },
    {
      name: 'reem',
      age: 24
    },
    {
      name: 'tasneem',
      age: 24
    },
    {
      name: 'zaki',
      age: 24
    },
    {
      name: 'shika',
      age: 24
    },
    {
      name: 'mahmoud',
      age: 24
    },
    {
      name: 'esraa',
      age: 24
    },
    {
      name: 'aya',
      age: 25
    },
    {
      name: 'islam',
      age: 27
    },
    {
      name: 'islam',
      age: 27
    },
    {
      name: 'islam',
      age: 27
    },
    {
      name: 'islam',
      age: 27
    },
    {
      name: 'islam',
      age: 27
    }
  ], (error, data) => {
    if (error) {
      console.log('Unable to insert data');
    }
    // console.log(data.insertedCount);
  });

  // find and limit
  db.collection('users').find({ age: 27 }).limit(3).toArray((error, users) => {
    if (error) {
      return console.log('error has occured');
    }
    console.log(users);
  });

  // updateMany to set name for the first 4
  db.collection('users').updateMany({ age: 27 }, { $set: { name: "UpdatedName" } }, { limit: 4 })
    .then((data1) => { console.log(data1.modifiedCount) })
    .catch((error) => { console.log(error) });

  // updateMany to increment age for the first 4
  db.collection('users').updateMany({ age: 27 }, { $inc: { age: 1 } }, { limit: 4 })
    .then((data1) => { console.log(data1.modifiedCount) })
    .catch((error) => { console.log(error) });

  // updateOne to increment age by 5
  db.collection('users').updateOne({ name: "UpdatedName" }, { $inc: { age: 5 } })
    .then((data1) => { console.log(data1.modifiedCount) })
    .catch((error) => { console.log(error) });

  // updateMany to increment age by 10
  db.collection('users').updateMany({}, { $inc: { age: 10 } })
    .then((data1) => { console.log(data1.modifiedCount) })
    .catch((error) => { console.log(error) });

  // deleteMany
  db.collection('users').deleteMany({ age: 41 })
    .then((data1) => { console.log(data1.deletedCount) })
    .catch((error) => { console.log(error) });
});
     


