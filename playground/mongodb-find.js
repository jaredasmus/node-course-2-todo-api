const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true , loggerLevel: 'error'}, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

        // //.find returns a cursor
        // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
        //     console.log('Todos', JSON.stringify(docs, undefined, 2));
        // }, (err) => {
        //     console.log('Unable to fetch todos', err);
        // })

         //.find returns a cursor
         db.collection('Todos').find().count().then((count) => {
            console.log('Todos count', count);
        }, (err) => {
            console.log('Unable to fetch todos', err);
        })

        //client.close();
    }
});