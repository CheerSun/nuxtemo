module.exports = {
  mysql: {
    dev: {
      host: 'localhost',
      user: 'root',
      port: 3306,
      password: 'root',
      database: 'nuxt'
    },
    prod: {
      host: '127.0.0.1',
      user: 'root',
      port: 3306,
      password: 'root',
      database: 'nuxt'
    }
  },
  mongodb: {
    session: {
      db: 'nuxt',
      host: 'localhost',
      port: 27017,
      url: 'mongodb://localhost:27017/nuxt'
    },
    dev: {
      db: 'nuxt',
      host: 'localhost',
      port: 27017,
      url: 'mongodb://localhost:27017/nuxt'
    },
    prod: {
      db: 'nuxt',
      host: 'localhost',
      port: 27017,
      url: 'mongodb://localhost:27017/nuxt'
    }
  },
  redis: {
    session: {
      host: '127.0.0.1',
      port: 6379,
      db: '0'
    },
    dev: {
      host: '127.0.0.1',
      port: 6379,
      db: '0'
    },
    prod: {
      host: '127.0.0.1',
      port: 6379,
      db: '0'
    }
  }
}
