const express = require('express');
// import { express } from 'express';
const {
    resize
} = require('./controls');
const router = express.Router();

router.post('/resize', resize);

module.exports = router;