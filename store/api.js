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
export const getNews = ({page, per_page}, callback) => {
  axios.get('/api/news', {page: page, per_page: per_page}).then(function (response) {
    callback(null, response.data || [])
  }).catch(function (err) {
    console.log(err)
    callback(err, [])
  })
}
