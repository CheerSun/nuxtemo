const newsService = require('../service/newsService')
class NewsController {
  getNews (cond, cb) {
    console.log('1111111111111111111111')
    newsService.getNewsList(cond, function (err,newsList) {
      cb(err, newsList)
    })
  }
}
module.exports = new NewsController()
