const express = require('express');
const { getData, addToQueue } = require('../controllers/mainController');

const router = express.Router();
router.get('/data/:id', getData);
router.post('/process', addToQueue);

module.exports = router;
