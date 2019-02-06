const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');
const {ObjectID} = require('mongodb');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    console.log(req.body);

    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
         res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(404).send("Invalid ID, try again.");
    }

    Todo.findById(req.params.id).then(todo => {

        if(!todo) {
            return res.status(404).send("Did not find a TODO with that id");
        }
        res.send({todo})
    }).catch(err => {
        res.status(400).send(err);
    });

});

app.delete('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)) {
        return res.status(404).send("Invalid ID, try again.");
    }

    Todo.findByIdAndRemove(req.params.id).then(todo => {

        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo})
    }).catch(err => {
        res.status(400).send();
    });

});


app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};