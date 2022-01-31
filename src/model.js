const Pool = require('pg').Pool
const pool = new Pool({
  user: 'new_user',
  host: 'localhost',
  database: 'watchmakers',
  password: 'root',
  port: 5432,
});
const getMerchants = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM merchants', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
      })
    }) 
  }