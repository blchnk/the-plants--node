// const connectDb = require('../db/connect');
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Server is working');
});

module.exports = router;
