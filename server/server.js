import express from 'express';
import dotenv from 'dotenv';
import URLRouter from './router/routerURl.js';
import connectDB from './config/db_config.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.use('/api', URLRouter);

connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})