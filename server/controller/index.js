const userService = require('../service/userService')
class UserController {
  register (cond, callback) {
    userService.createUser(cond, function (err, result) {
      console.log(err)
      callback()
    })
  }
  login (cond, callback) {
    userService.findUserByName(cond, function (error) {
      if (!error) {
        // sendEmal()
      }
      callback()
    })
  }
}
module.exports = new UserController()
