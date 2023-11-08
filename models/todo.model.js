import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    completed: String,
});

const Todo = mongoose.model('todo', todoSchema);

export default Todo;
