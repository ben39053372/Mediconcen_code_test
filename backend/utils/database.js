const mysql = require('mysql2')

const pool = mysql.createPool({
  connectionLimit: 25,
  host: process.env['DB_HOST'],
  user: process.env['DB_USER'],
  port: process.env['DB_PORT'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB_DATABASE']
})

module.exports = pool