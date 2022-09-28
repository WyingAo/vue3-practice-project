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

export type { ILoginData,IDataType,ILoginDataType }