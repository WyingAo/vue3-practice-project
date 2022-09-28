import {createRouter,createWebHashHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/request/cache'
const routes:RouteRecordRaw[]=[
{
  path:'/',
  redirect:'home'
},
{
  path:'/home',
  name:'home',
  component:()=>import('@/views/home/home.vue')
},
{
  path:'/login',
  name:'login',
  component:()=>import('@/views/login/login.vue')
}
]

const router = createRouter({
  routes: routes,
  history:createWebHashHistory()
})

router.beforeEach(async(to)=>{
  if(to.path !== '/login'&&!LocalCache.getCache('token')){
   return '/login'
  }
})

export default router


