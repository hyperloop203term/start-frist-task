const express = require('express');
const router = express.Router();
const listusers = require('../services/listusers');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await listusers.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting Users from Database `, err.message);
    next(err);
  }
});

module.exports = router;