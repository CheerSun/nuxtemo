const Nuxt = require('nuxt')
const app = require('express')()

const bodyParser = require('body-parser')
const session = require('express-session')

const isProd = (process.env.NODE_ENV === 'production')
const port = process.env.PORT || 3000
const index = require('./server/router/index')
const news = require('./server/router/news')
const albums = require('./server/router/albums')
app.use(bodyParser.json())
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 60000 }
}))

// 用指定的配置对象实例化 Nuxt.js
let config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

app.use('/', index)
app.use('/news', news)
app.use('/albums', albums)
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
