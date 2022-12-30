const db = require('./db');
const helper = require('../middleware/helper');
const config = require('../config/config');

async function getMultiple(page = 1){

  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, address
     FROM users LIMIT ${offset},${config.listPerPage}`
  );
  
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}