import express from 'express';
const router = express.Router();
import todoHandler from '../handlers/todo.handler.js';

router.get('/', todoHandler.getList);
router.post('/', todoHandler.postTodo);
router.patch('/:id', todoHandler.patchTodo);
router.delete('/:id', todoHandler.deleteTodo);

export default router;
