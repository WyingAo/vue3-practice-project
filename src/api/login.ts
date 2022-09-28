import request from '@/utils/request'
import {ILoginData,IDataType,ILoginDataType } from './types'
export default function getLoginOut(data:ILoginData):Promise<IDataType<ILoginDataType>>{
  return request.post('/login',data)
}