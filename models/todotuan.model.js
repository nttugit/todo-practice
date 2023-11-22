import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    image: String,
    completed: Boolean,
});

const Todo = mongoose.model('todotuan', todoSchema);

export default Todo;
