const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET /api/countries
router.get('/', (req, res) => {
  res.sendStatus(200)
})


module.exports = router;
