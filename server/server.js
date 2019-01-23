const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

const Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Cook Dinner',
    completed: false
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('unable to save todo.');
});

const newTodo2 = new Todo({
    text: 'Eat Dinner',
    completed: false,
    completedAt: new Date().getTime()
});

newTodo2.save().then((doc) => {
    console.log('Saved todo2', doc);
}, (e) => {
    console.log('unable to save todo2.');
});