import axios from 'axios'
import { Config } from '../utils/config'
const instance = axios.create({
  timeout: 10000
})
instance.interceptors.request.use(config => {
  return config
})
instance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

function $get (url, data = {}) {
  return instance.get(url, data)
}

function $post (url, data = {}) {
  return instance.post(url, data)
}

class Service {
  user = {
    login: data => $post(`${Config.BaseUrl}/login`, data),
    profile: data => $get(`${Config.BaseUrl}/profile`, data)
  }
}

export const services = new Service()
