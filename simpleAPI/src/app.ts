import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Counter } from './models/counter';

const app = express();
app.use(cors());

const port = process.env.PORT || 3000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://mongo:27017/hitcounter';

mongoose.connect(mongoUrl).then(() => {
    console.log('Connected to MongoDB');
}).catch(error => {
    console.error('MongoDB connection error:', error);
});

app.get('/counter', async (req, res) => {
    try {
        const counter = await Counter.findOneAndUpdate(
            { name: 'hits' },
            { $inc: { count: 1 } },
            { upsert: true, new: true }
        );
        res.json({ number: counter.count });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
