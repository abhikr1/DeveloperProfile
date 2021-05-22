const express = require('express');
const router = express.Router();

const developers = require('./routes/developers');

// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/developers', developers);


module.exports = router;