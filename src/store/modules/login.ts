import { defineStore } from 'pinia'
import  {getLoginOut, getUserInfo}  from '@/api/login'
import {ILoginData } from '@/api/types'
import LocalCache from '@/utils/request/cache'
import router from '@/router'
export default defineStore('home',{
  state:()=>({
    token:'',
    userInfo:{},
    userMenus: []
  }),
  actions:{
   async Login(data:ILoginData){
     const res = await getLoginOut(data)
      if(res.code === 200 ) {
         this.token = res.data.token
         LocalCache.setCache('token', res.data.token)
         await this.updateUserInfo(res.data.token)
         router.replace('/home')
      }
   },
   async updateUserInfo(token:string){
    const res = await getUserInfo(token)
    console.log(res,65656)
   }
  }
})