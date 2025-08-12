import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
import express, { json } from 'express';
import { connect } from 'mongoose';
import routes from './routes/index.js';

const app = express();
app.use(json());
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
