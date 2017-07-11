const topicService = require('../service/topicService')
class TopicController {
  getTopicList (cond, cb) {
    console.log('topic controller')
    topicService.getTopicList(cond, function (err, newsList) {
      cb(err, newsList)
    })
  }
  getTopicDetail (id, cb) {
    topicService.getTopicDetail(id, function (err, topic) {
      cb(err, topic)
    })
  }
}
module.exports = new TopicController()
