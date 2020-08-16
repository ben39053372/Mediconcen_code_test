import axios from 'axios'
import {baseURL} from '../setting'
import {getItem} from '../localStore'

const api = axios.create({
  baseURL,
  timeout: 5000,
  validateStatus: () => {
    return true
  }
})

api.interceptors.request.use(async config => {
  config.headers['Authorization'] = await getItem('token')
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
});

api.interceptors.response.use(res => {
  return res
}, error => {
  console.log(error)
  return error
})

export default api