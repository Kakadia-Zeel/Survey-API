const express = require('express');

const {
    login
} = require('./controls');

const router = express.Router();

router.post('/login', login);

module.exports = router;