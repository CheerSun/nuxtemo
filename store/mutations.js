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
    state.online = true
    console.log('登陆成功 ' + user.name)
  },
  [types.LOGOUT] (state, {user}) {
    console.log('正在退出')
  },
  [types.LOGEDOUT] (state, {user}) {
    state.user = {}
    console.log('您已经退出')
  },
  [types.GETNEWS] (state, {page, per_page}) {
    console.log(page, per_page)
  },
  [types.FETCHED_NEWS] (state, {news}) {
    state.newsList = state.newsList.concat(news)
  }
}
