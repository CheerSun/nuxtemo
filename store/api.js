import axios from 'axios'
export const register = (user, callback) => {
  axios.post('api/user/register', user).then(function (response) {
    callback(null, response)
  }).catch(function (error) {
    callback(error)
  })
}
export const login = (user, callback) => {
  axios.post('/api/user/login', user).then(function (response) {
    callback(null, response)
  }).catch(function (err) {
    console.log(err)
    callback(err)
  })
}
export const logout = (user, callback) => {
  axios.post('/api/user/logout', user).then(function (response) {
    callback(null, response)
  }).catch(function (err) {
    console.log(err)
    callback(err)
  })
}
export const getNews = (user, callback) => {
  axios.get('/api/news').then(function (response) {
    callback(null, response)
  }).catch(function (err) {
    console.log(err)
    callback(err, null)
  })
}
