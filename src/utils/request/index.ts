import axios from 'axios';
import {BASE_URL,TIME_OUT} from './config'
const instance = axios.create({
  baseURL:BASE_URL,
  timeout: TIME_OUT
})

//请求拦截器
instance.interceptors.request.use(
// 请求成功
  function(config){
    return config
  },
  function(err){
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
// 响应成功
  function(response){
    if(response.status === 200){
      const data = response.data
      return data
    }
    return response
  },
  function(err){
    return Promise.reject(err)
  }
)

export default instance