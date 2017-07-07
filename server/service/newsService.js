const client = require('../db/mongo')
const config = require('../config/db')

const isProd = (process.env.NODE_ENV === 'production')
let mongoUrl = config.mongodb.dev.url
if (isProd) {
  mongoUrl = config.mongodb.prod.url
}
const newsService = {
  getNewsList: function (cond, cb) {
    client.connect(mongoUrl, function (err, db) {
      if (err) {
        cb(null, [])
      } else {
        const newsModel = db.collection('news')
        const page = cond.page || 1
        const size = parseInt(cond.per_page || 10)
        const skip = (page - 1) * size
        newsModel.find(cond, {limit: size, skip: skip}).sort({_id: -1}).toArray(function (err, result) {
          cb(err, result)
        })
      }
    })
  }
}
module.exports = newsService
