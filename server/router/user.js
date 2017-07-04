const express = require('express')
const router = express.Router()
const service = require('../controller/index')
router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.post('/login', function (req, res, next) {
  service.login(req.body, function () {
    res.json({
      name: 'register'
    })
  })
})
router.post('/register', function (req, res, next) {
  service.register(req.body, function () {
    res.json({
      name: 'register'
    })
  })
})
router.post('/logout', function (req, res, next) {
  console.log('logout')
  res.json({
    name: 'logout'
  })
})
module.exports = router
