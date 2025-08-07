const express = require('express');
const router = express.Router();
const { handleApplication } = require('../controllers/contactController.js');

router.post('/', handleApplication);

module.exports = router;
