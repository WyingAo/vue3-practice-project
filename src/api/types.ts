import { type } from "os"

interface ILoginData {
  username: string
  password: string 
}

interface IDataType<T = any> {
  code:number,
  message:string,
  data:T
}

interface ILoginDataType {
  id: number
  token: string
  username: string
}

// 菜单栏信息
type INavMenu = {
  children : INavMenu[],
  created : number,
  icon : string | null
  parent_id : number,
  sort : number,
  title : string,
  type : number,
  updated : number,
  url : string
  id:number
}


export type { ILoginData,IDataType,ILoginDataType,INavMenu }