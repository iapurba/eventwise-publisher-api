import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for your React app's origin
app.use(cors({ origin: 'http://localhost:3000' }));

// Establish the MongoDB database connection
connectDB();

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Express server is running on ${port}`);
});