const { Queue } = require('bullmq');
const connection = { connection: { host: 'localhost', port: 6379 } };

const queue = new Queue('taskQueue', connection);

module.exports = queue;
// src/queue/jobQueue.js