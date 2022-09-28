import { defineStore } from 'pinia'
import  getLoginOut  from '@/api/login'
import {ILoginData } from '@/api/types'
import LocalCache from '@/utils/request/cache'
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
      }
   }
  }
})