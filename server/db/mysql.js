const mysql = require('mysql')
const config = require('../config/db')
let connection = null
if (process.env.NODE_ENV === 'production') {
  connection = mysql.createConnection(config.mysql.prod)
} else {
  connection = mysql.createConnection(config.mysql.dev)
}

module.exports = connection
