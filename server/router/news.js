const express = require('express')
const router = express.Router()
const service = require('../controller/news')
router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
  service.getNews(req.query, function (err, newsList) {
    res.json(err ? [] : newsList)
  })
})

module.exports = router
