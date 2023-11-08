import TodoModel from '../models/todo.model.js';

const handler = {};
handler.getList = async (req, res) => {
    const todoList = await TodoModel.find();
    return res.json(todoList);
};

handler.postTodo = async (req, res) => {
    const newTodo = await TodoModel.create(req.body);
    newTodo.completed = false;
    return res.json(newTodo);
};

handler.patchTodo = async (req, res) => {
    const updatedTodo = await TodoModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
    );
    // const todo = await TodoModel.findOne({})
    console.log({ id: req.params.id }, { ...req.body });
    return res.json(updatedTodo);
};

handler.deleteTodo = async (req, res) => {
    const resp = await TodoModel.deleteOne({ _id: req.params.id });
    return res.json(resp);
};

export default handler;
