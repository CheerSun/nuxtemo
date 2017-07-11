const express = require('express')
const router = express.Router()
const service = require('../controller/topics')

router.use(function (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
  console.log('topic router')
  service.getTopicList(req.query, function (err, topicList) {
    res.json(err ? [] : topicList)
  })
})
router.get('/:id', function (req, res, next) {
  console.log('topic router')
  service.getTopicDetail(req.params.id, function (err, topic) {
    res.json(err ? {} : topic)
  })
})

module.exports = router
