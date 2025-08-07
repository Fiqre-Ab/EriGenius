const express = require('express');
const router = express.Router();
const { handleApplication } = require('../controllers/applyController');

router.post('/', handleApplication);

module.exports = router;
