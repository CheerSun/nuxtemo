const client = require('../db/mongo')
const config = require('../config/db')
const request = require('request')
const isProd = (process.env.NODE_ENV === 'production')
let mongoUrl = config.mongodb.dev.url
if (isProd) {
  mongoUrl = config.mongodb.prod.url
}
const topicService = {
  getTopicList: function (cond, cb) {
    console.log('topic service')
    client.connect(mongoUrl, function (err, db) {
      if (err) {
        cb(null, [])
      } else {
        const topicModel = db.collection('topics')
        const page = cond.page || 1
        const size = parseInt(cond.per_page || 10)
        const skip = (page - 1) * size
        topicModel.find(cond, {limit: size, skip: skip}).sort({_id: -1}).toArray(function (err, result) {
          cb(err, result)
        })
      }
    })
  },
  getTopicDetail: function (id, cb) {
    console.log('topic service')
    request('https://cnodejs.org/api/v1/topic/' + id, function (err, response, body) {
      if (!err && response.statusCode === 200) {
        body = JSON.parse(body)
        const data = body.data
        cb(err, data)
      } else {
        cb(err, {})
      }
    })
  }
}
module.exports = topicService
