const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true , loggerLevel: 'error'}, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

       //findOneAndUpdate
       db.collection('Todos').findOneAndUpdate(
           {_id: new ObjectID('5c469fdd26278234a2323096')}, 
           {
               $set:{
                   completed: true
                }
            }, 
           {
               returnOriginal: false
           }).then(
           (result) => {
                console.log(result);
           });

        //client.close();
    }
});