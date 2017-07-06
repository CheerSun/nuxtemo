import * as types from './mutation-types'
import * as API from './api'
export default {
  register ({commit}, {user}) {
    API.register({user}, function (err, response) {
      if (err) {
        console.log('register error')
      } else {
        commit(types.REGISTER, user.name)
      }
    })
  },
  login ({commit}, {user}) {
    commit(types.LOGIN, {user})
    API.login({user}, function (error, response) {
      if (error) {
        console.log(error)
      } else {
        commit(types.LOGEDIN, {user})
      }
    })
  },
  logout ({commit}, {user}) {
    commit(types.LOGOUT, {user})
    API.logout({user}, function (err, response) {
      if (err) {
        console.log(err)
      } else {
        commit(types.LOGEDOUT, {user})
      }
    })
  },
  news ({commit}) {
    commit(types.GETNEWS)
    API.getNews({}, function (err, news) {
      if (err) {
        commit(types.FETCHED_NEWS, {news: []})
      } else {
        commit(types.FETCHED_NEWS, {news})
      }
    })
  }
}
