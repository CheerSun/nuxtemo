var MongoClient = require('mongodb').MongoClient
var dbConfig = require('../config/db')
var dbSettings = dbConfig.mongodb.dev
if (process.env.NODE_ENV === 'production') {
  dbSettings = dbConfig.mongodb.prod
}

function getConnection () {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(dbSettings.url, function (err, db) {
      if (err) {
        reject(null)
      } else {
        resolve(db)
      }
    })
  })
}
var getDatabase = function * () {
  var connection = yield getConnection()
  return connection
}
module.exports = getDatabase()
