import express from 'express';
const router = express.Router();
// Sửa cái này
// Handler: để xử lý logic
import todoHandler from '../handlers/todotu.handler.js';

// Lấy danh sách todo tu
router.get('/', todoHandler.getList);

// Tạo một todo tu
router.post('/', todoHandler.postTodo);

// Cập nhật một todo tu
router.patch('/:id', todoHandler.patchTodo);

// Xoá 1 todo tu
router.delete('/:id', todoHandler.deleteTodo);

export default router;
