const express = require('express')
const router = express.Router()
const Service = require('../controller/albums')
const service = new Service()
router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function* (req, res, next) {
  console.log(req.query)
  const newsList = yield service.newsList()
  console.log(newsList)
  res.end(newsList)
})

router.get('/album', function (req, res, next) {
  res.json({})
})
module.exports = router
