const Nuxt = require('nuxt')
const app = require('express')()

const bodyParser = require('body-parser')
const session = require('express-session')
// var RedisStore = require('connect-redis')(session)
var MongoStore = require('connect-mongo')(session)
const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000
const user = require('./server/router/user')
const news = require('./server/router/news')
const albums = require('./server/router/albums')
app.use(bodyParser.json())
const dbConfig = require('./server/config/db')

// redis save session
// app.use(session({
//   store: new RedisStore(dbConfig.redis.session),
//   cookie: { maxAge: 1000 * 60 * 60 * 60 },
//   secret: 'keyboard cat',
//   key: 'nuxt_session'
// }))

app.use(session({ // session持久化配置
  secret: 'kvkenssecret',
  key: 'kvkenskey',
  cookie: {maxAge: 1000 * 60 * 60 * 60}, // 超时时间
  resave: false,
  saveUninitialized: true,
  store: new MongoStore(dbConfig.mongodb.session)
}))

// 用指定的配置对象实例化 Nuxt.js
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

app.use('/api/user', user)
app.use('/api/news', news)
app.use('/api/albums', albums)
// 用 Nuxt.js 渲染每个路由
app.use(nuxt.render)

// 在开发模式下启用编译构建和热加载
if (config.dev) {
  nuxt.build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

// 服务端监听
app.listen(port, '0.0.0.0')
console.log('Server listening on localhost:' + port)
