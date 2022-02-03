const Pool = require('pg').Pool
const pool = new Pool({
  user: 'new_user',
  host: 'localhost',
  database: 'watchmakers',
  password: 'root',
  port: 5432,
});
const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, email } = body
    pool.query('INSERT INTO merchants (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`A new merchant has been added added: ${results.rows[0]}`)
    })
  })
}