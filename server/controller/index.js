const userService = require('../service/userService')
class UserController {
  register (cond, callback) {
    console.log(cond)
    callback()
  }
  login (cond, callback) {
    userService.findUserByName(cond, function (err, result) {
      console.log(err)
      console.log(result)
      callback()
    })
  }
}
module.exports = new UserController()
