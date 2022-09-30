import { defineStore } from 'pinia'
import  {getLoginOut, getUserInfo,getUserMenu}  from '@/api/login'
import {ILoginData,INavMenu } from '@/api/types'
import LocalCache from '@/utils/request/cache'
import router from '@/router'
export default defineStore('home',{
  state:()=>({
    token:'',
    userInfo:{},
    userMenus: [] as INavMenu []
  }),
  actions:{
   async Login(data:ILoginData){
     const res = await getLoginOut(data)
      if(res.code === 200 ) {
         this.token = res.data.token
         LocalCache.setCache('token', res.data.token)
         await this.updateUserInfo(res.data.token)
         await this.getUserMenus()
         router.replace('/home')
      }
   },
   async updateUserInfo(token:string){
    const res = await getUserInfo()
   },
   async getUserMenus(){
    const res =  await getUserMenu()
    this.userMenus = res.data
    LocalCache.setCache('userMenus',this.userMenus)
   }
  }
})