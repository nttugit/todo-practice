// Đây là model todo trong database của mình
import TodoTuanModel from '../models/todotuan.model.js';

const handler = {};
handler.getList = async (req, res) => {
    const todoList = await TodoTuanModel.find();
    return res.json(todoList);
};

handler.postTodo = async (req, res) => {
    // Lấy dữ liệu từ req.body
    const newTodo = await TodoTuanModel.create(req.body);
    // Xử lý logic thông thường, Ví dụ: mới tạo todo thì chưa hoàn thành task
    newTodo.completed = false;
    return res.json(newTodo);
};

handler.patchTodo = async (req, res) => {
    const updatedTodo = await TodoTuanModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
    );
    // const todo = await TodoTuanModel.findOne({})
    console.log({ id: req.params.id }, { ...req.body });
    return res.json(updatedTodo);
};

handler.deleteTodo = async (req, res) => {
    const resp = await TodoTuanModel.deleteOne({ _id: req.params.id });
    return res.json(resp);
};

export default handler;
