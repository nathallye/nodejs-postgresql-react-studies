const Pool = require('pg').Pool

const pool = new Pool ({
  user: 'nathallye',
  password: '180800',
  host: 'localhost',
  port: 5432,
  database: "todolist"
})

module.exports = pool;