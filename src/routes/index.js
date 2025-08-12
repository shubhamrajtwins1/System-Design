import { Router } from 'express';
import { getData, addToQueue } from '../controllers/mainController.js';

const router = Router();
router.get('/data/:id', getData);
router.post('/process', addToQueue);

export default router;
