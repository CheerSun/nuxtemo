var config = require('../config/db')
var redis = require('redis')
var isProd = (process.env.NODE_ENV === 'production')
var redisConfig
if (isProd) {
  redisConfig = config.redis.prod
} else {
  redisConfig = config.redis.dev
}
var client = redis.createClient(redisConfig.port, redisConfig.host)

// redis 链接错误
client.on('error', function (error) {
  console.log(error)
})

module.exports = client
