import * as types from './mutation-types'
export default {
  [types.REGISTER] (state, name) {
    console.log(name + '注册成功！')
  },
  [types.LOGIN] (state, {user}) {
    console.log(user.name + '登陆中')
  },
  [types.LOGEDIN] (state, {user}) {
    state.user = user
    console.log('登陆成功 ' + user.name)
  },
  [types.LOGOUT] (state, {user}) {
    console.log('正在退出')
  },
  [types.LOGEDOUT] (state, {user}) {
    state.user = {}
    console.log('您已经退出')
  }
}
