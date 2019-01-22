//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true , loggerLevel: 'info'}, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // db.collection('Todos').insertOne({
        //     text: 'Something to do.',
        //     completed: false
        // }, (err, res) => {
        //     if(err) {
        //         console.log('Unable to insert Todo', err);
        //     } else {
        //         console.log(JSON.stringify(res.ops, undefined, 2));
        //     }
        // });

        // db.collection('Users').insertOne({
        //     name: 'Jared',
        //     age: 47,
        //     location: 'Utah'
        // }, (err, res) => {
        //     if(err) {
        //         console.log('Unable to insert User', err);
        //     } else {
        //         console.log(res.ops[0]._id.getTimestamp());
        //     }
        // });




        client.close();
    }
});