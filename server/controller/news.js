const newsService = require('../service/newsService')
class NewsController {
  getNews (cond, cb) {
    newsService.getNewsList(cond, function (err, newsList) {
      cb(err, newsList)
    })
  }
}
module.exports = new NewsController()
