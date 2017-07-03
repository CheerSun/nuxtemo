import axios from 'axios'
export const login = (user, callback) => {
  axios.get('/api/login').then(function (response) {
    callback(null, response)
  }).catch(function (err) {
    console.log(err)
    callback(err)
  })
}
export const logout = (user, callback) => {
  axios.post('/api/logout').then(function (response) {
    callback(null, response)
  }).catch(function (err) {
    console.log(err)
    callback(err)
  })
}
