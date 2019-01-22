const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true , loggerLevel: 'error'}, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server');
        const db = client.db('TodoApp');

       //deleteMany
    //    db.collection('Todos').deleteMany({
    //        text: 'Eat Lunch'
    //    }).then((result) => {
    //         console.log(result);
    //    })

       //deleteOne
    //    db.collection('Todos').deleteOne({
    //        text: 'Eat Lunch'
    //    }).then((result) => {
    //        console.log(result);
    //    })

       //findOneAndDelete
       db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
           console.log(result);
       });


        //client.close();
    }
});