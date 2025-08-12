import { Queue } from 'bullmq';
import dotenv from 'dotenv';
dotenv.config(); // Load environment variables from .env file
const connection = { connection: { host: 'localhost', port: 6379 } };

const queue = new Queue(process.env.QUEUE_NAME ?? "taskQueue", connection);

export default queue;
// src/queue/jobQueue.js