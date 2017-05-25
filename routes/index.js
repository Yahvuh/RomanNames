'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  console.log('Hit index');
  return res.render('index');
});

module.exports = router;
