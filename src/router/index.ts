import {createRouter,createWebHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/request/cache'
import { firstMenuPath } from '@/utils/request/map-menus'
const routes:RouteRecordRaw[]=[
{
  path:'/',
  redirect:'main'
},
{
  path:'/main',
  name:'main',
  component:()=>import('@/views/main/main.vue'),
  children:[]
},
{
  path:'/login',
  name:'login',
  component:()=>import('@/views/login/login.vue')
},
{
  path:'/:pathMatch(.*)*',
  name:'not-found',
  component:()=>import('@/views/not-found/not-found.vue')
}
]

const router = createRouter({
  routes: routes,
  history:createWebHistory()
})

router.beforeEach(async(to)=>{
  if(to.path !== '/login'&&!LocalCache.getCache('token')){
   return '/login'
  }
  if(to.path === '/main') {
    return firstMenuPath
  }
})
export default router


