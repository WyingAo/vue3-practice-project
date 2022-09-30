import request from '@/utils/request'
import {ILoginData,IDataType,ILoginDataType,INavMenu } from './types'

// 登录
export function getLoginOut(data:ILoginData):Promise<IDataType<ILoginDataType>>{
  return request.post('/login',data)
}

// 获取用户信息
export function getUserInfo():Promise<IDataType>{
  return request.get('/user/')
}

// 获取菜单栏信息
export function getUserMenu():Promise<IDataType<INavMenu[]>>{
  return request.get('/menu')
}

