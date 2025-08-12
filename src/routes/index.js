const express = require('express');
const router = express.Router();
const { sayHello } = require('../controllers/sampleController');

router.get('/', sayHello);

module.exports = router;
