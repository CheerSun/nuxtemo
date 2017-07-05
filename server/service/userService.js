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
  }
}
module.exports = userService
