const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

router.post('/image', generateImage);

module.exports = router;
