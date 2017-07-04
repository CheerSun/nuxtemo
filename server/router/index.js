const express = require('express')
const router = express.Router()

router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
  res.json({
    name: '主页'
  })
})

module.exports = router
