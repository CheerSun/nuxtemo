const connection = require('../db/mysql')
const userService = {
  findUserByName: (cond, cb) => {
    console.log(cond)
    const sql = {
      sql: 'select * from user where username = ? and password = ? ',
      timeout: 1000 * 60 * 60 * 2,
      values: [cond.name, cond.password]
    }
    connection.query(sql, function (err, result, fields) {
      cb(err, result)
    })
  },
  findUserById: (cond, cb) => {
    console.log(cond)
    const sql = {
      sql: 'select * from user where userid = ? ',
      timeout: 1000 * 60 * 60 * 2,
      values: [cond.userId]
    }
    connection.query(sql, function (err, result, fields) {
      cb(err, result)
    })
  },
  createUser: (cond, cb) => {
    var query = connection.query('insert into user set ?', cond, function (error, results, fields) {
      cb(error, results)
    })
    console.log(query)
  }
}
module.exports = userService
