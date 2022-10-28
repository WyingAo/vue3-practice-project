import { defineStore } from 'pinia'
import  {getLoginOut, getUserInfo,getUserMenu}  from '@/api/login'
import {ILoginData,INavMenu } from '@/api/types'
import LocalCache from '@/utils/request/cache'
import router from '@/router'
import { mapMenus } from '@/utils/request/map-menus'
export default defineStore('main',{
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
         router.replace('/main')
      }
   },
   async updateUserInfo(token:string){
    const res = await getUserInfo()
   },
   async getUserMenus(){
    const res =  await getUserMenu()
    this.userMenus = res.data
    LocalCache.setCache('userMenus',res.data)
    this.storageUserMenu(res.data)
   },
   // 储存菜单
   storageUserMenu(userMenus:INavMenu []){
    const menuRoutes = mapMenus(userMenus)
    console.log(menuRoutes,'menuRoutes')
    // 注册路由
    menuRoutes.forEach((route)=>{
      console.log(route,'998877')
      router.addRoute('main',route)
    })
   }
  }
})