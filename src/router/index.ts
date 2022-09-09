import {createRouter,createWebHashHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

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

export default router