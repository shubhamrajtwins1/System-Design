import { Worker } from 'bullmq';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const connection = { connection: { host: 'localhost', port: 6379 } };

new Worker(process.env.QUEUE_NAME ?? "taskQueue", async (job) => {
    console.log('Processing job:', job.name, job.data);
}, connection);
// src/queue/worker.js