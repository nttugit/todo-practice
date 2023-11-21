import express from 'express';
const router = express.Router();
// Sửa cái này
// Handler: để xử lý logic
import todoHandler from '../handlers/todovinh.handler.js';

// Lấy danh sách todo vinh
router.get('/', todoHandler.getList);

// Tạo một todo vinh
router.post('/', todoHandler.postTodo);

// Cập nhật một todo vinh
router.patch('/:id', todoHandler.patchTodo);

// Xoá 1 todo vinh
router.delete('/:id', todoHandler.deleteTodo);

export default router;
