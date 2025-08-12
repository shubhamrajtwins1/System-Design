const { Worker } = require('bullmq');
const connection = { connection: { host: 'localhost', port: 6379 } };

new Worker('taskQueue', async (job) => {
    console.log('Processing job:', job.name, job.data);
}, connection);
// src/queue/worker.js