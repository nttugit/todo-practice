// Đây là model todo trong database của mình
import TodoVinhModel from '../models/todovinh.model.js';

const handler = {};
handler.getList = async (req, res) => {
    const todoList = await TodoVinhModel.find();
    return res.json(todoList);
};

handler.postTodo = async (req, res) => {
    // Lấy dữ liệu từ req.body
    const newTodo = await TodoVinhModel.create(req.body);
    // Xử lý logic thông thường, Ví dụ: mới tạo todo thì chưa hoàn thành task
    newTodo.completed = false;
    return res.json(newTodo);
};

handler.patchTodo = async (req, res) => {
    const updatedTodo = await TodoVinhModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
    );
    // const todo = await TodoTuModel.findOne({})
    console.log({ id: req.params.id }, { ...req.body });
    return res.json(updatedTodo);
};

handler.deleteTodo = async (req, res) => {
    const resp = await TodoVinhModel.deleteOne({ _id: req.params.id });
    return res.json(resp);
};

export default handler;
