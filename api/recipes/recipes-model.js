const db = require('../../data/db-config');

async function find() {
  const rows = await db ('recipes')
return rows
}






module.exports = {
  find,

}