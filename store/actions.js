import * as types from './mutation-types'
import * as API from './api'
export default {
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
  }
}
