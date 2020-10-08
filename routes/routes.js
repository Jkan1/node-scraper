
const express = require('express');
const router = express.Router();

const controller                = require('../controllers/controller');
const validator                 = require('../validators/validator');

router.post('/scrape',  validator.scrape,   controller.scrape);

module.exports = router;