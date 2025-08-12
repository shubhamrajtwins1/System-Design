import redis from '../services/redis.js';
import queue from '../queue/jobQueue.js';

export async function getData(req, res) {
    const { id } = req.params;

    const cached = await redis.get(`data:${id}`);
    if (cached) {
        return res.json({ source: 'cache', data: JSON.parse(cached) });
    }

    // Simulate DB call
    const data = { id, name: 'Data from DB' };
    await redis.set(`data:${id}`, JSON.stringify(data), 'EX', 60); // cache for 60s

    res.json({ source: 'db', data });
}

export async function addToQueue(req, res) {
    const job = await queue.add('processJob', { task: 'clean-data' });
    res.json({ jobId: job.id });
}
