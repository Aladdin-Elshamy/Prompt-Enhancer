import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import appRoutes from './routes/appRoutes.js';

dotenv.config();

const app = express();
app.use(cors({
    origin:["http://localhost:5173"],
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/api', appRoutes);
app.use((req, res) => {
    res.status(404).json({ error: 'Path Not Found' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
