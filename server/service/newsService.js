const db = require('../db/mongo')
const newsService = {
  getNewsList: function (cond, cb) {
    console.log(db)
    if (db) {
      const newsModel = db.collection('news')
      newsModel.find(cond).toArray(function (err,result) {
        cb(err, result)
      })
    } else {
      cb(null, [])
    }
  }
}
module.exports = newsService
