var schedule = require('node-schedule')
const client = require('../db/mongo')
const config = require('../config/db')
const ObjectID = require('mongodb').ObjectID
const _ = require('lodash')
const async = require('async')
const request = require('request')
// const eventproxy = require('eventproxy')

schedule.scheduleJob('* 15 * * * *', function () {
  getTopics()
})

function getTopics () {
  async.waterfall([
    function (callback) {
      request('https://cnodejs.org/api/v1/topics', function (err, response, body) {
        if (!err && response.statusCode === 200) {
          body = JSON.parse(body)
          let ops = []
          _.each(body.data, function (topic) {
            const _id = ObjectID(topic.id)
            delete topic._id
            ops.push({
              updateOne: {
                filter: {_id: _id},
                update: {
                  '$set': topic
                },
                upsert: true
              }
            })
          })
          callback(null, ops)
        } else {
          callback(null, [])
        }
      })
    },
    function (ops, callback) {
      client.connect(config.mongodb.dev.url, function (err, db) {
        if (!err) {
          const models = db.collection('topics')
          bulkOperate(models.bulkWrite, models, ops, function () {
            console.log('topics完成')
            callback(null, {})
          })
        } else {
          callback()
        }
      })
    }
  ], function (err, result) {
    console.log(err, result)
  })
}


function bulkOperate (fn, scope, arr, argus, cb) {
  if (!cb) {
    cb = argus
    argus = []
  }
  if (arr.length === 0) {
    return cb()
  }
  if (arr.length <= 1000) {
    var parameters = [arr, cb]
    parameters.splice.apply(parameters, [1, 0].concat(argus))
    fn.apply(scope, parameters)
  } else {
    var fns = []
    const add = function (data) {
      fns.push(function (cb) {
        var parameters = [data, cb]
        parameters.splice.apply(parameters, [1, 0].concat(argus))
        fn.apply(scope, parameters)
      })
    }
    while (arr.length > 0) {
      var data = arr.slice(0, 1000)
      arr = arr.slice(1000)
      add(data)
    }
    async.parallel(fns, function (err, result) {
      if (err) {
        cb(err)
      } else {
        cb(null, _.flatten(result))
      }
    })
  }
}
