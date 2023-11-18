import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import cors from 'cors';
import * as routes from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS for your React app's origin
app.use(cors({ origin: 'http://localhost:3000' }));

// Establish the MongoDB database connection
connectDB();

// Publisher APIs
app.use('/api/publisher/auth', routes.authRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Express server is running on ${port}`);
});