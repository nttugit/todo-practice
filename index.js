import express from 'express';
// Thư viện giúp sử dụng biến môi trường trong file .env
import dotenv from 'dotenv';
dotenv.config(); //Khai ba

const app = express();
const port = process.env.PORT || 9999; //Mặc định là port 3000
// Kết nối database
import connectDB from './utils/db.js';

// Routes
import userRouter from './routes/user.route.js';
import todoRouter from './routes/todo.route.js';
import todoTuRouter from './routes/todotu.route.js';
import todoVinhRouter from './routes/todovinh.route.js';

// Giúp gửi dữ liệu với method POST
app.use(express.json());
app.use('/users', userRouter);
app.use('/todos', todoRouter);
app.use('/todos-tu', todoTuRouter);
app.use('/todos-vinh', todoVinhRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Big Ads server is listening on port ${port}`);
});
