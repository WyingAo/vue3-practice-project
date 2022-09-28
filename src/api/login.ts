import request from '@/utils/request'
import {ILoginData,IDataType,ILoginDataType } from './types'

// 登录
export function getLoginOut(data:ILoginData):Promise<IDataType<ILoginDataType>>{
  return request.post('/login',data)
}

// 获取用户信息
export function getUserInfo(token:string):Promise<IDataType>{
  return request.get(`/user/`,{params:{token:token}})
}


