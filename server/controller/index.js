class UserController {
  register (cond, callback) {
    console.log(cond)
    callback()
  }
  login (cond, callback) {
    console.log(cond)
    callback()
  }
}
module.exports = new UserController()
