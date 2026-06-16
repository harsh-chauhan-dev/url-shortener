import express from 'express';
import dotenv from 'dotenv';


const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("URL Shortener project");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})