import { RouteRecordRaw } from 'vue-router'
let firstMenuPath: any = null
// 注册动态路由
// 所有二级路由
function mapMenus(userMenus:any[]):RouteRecordRaw[]{
  const context = import.meta.glob('../../router/main/**/*.ts',{ eager: true })
  const routes:RouteRecordRaw[] = []
  const allRoutes:any[] = []
  Object.keys(context).forEach((item,index)=>{
  const a = item.split('/router')[1]
  
  if(index !== 0) {
    const obj:RouteRecordRaw = {
      path:a.split('/').slice(0,a.split('/').length - 1).join('/'),
      name:a.split('/')[a.split('/').length - 1].replace('.ts',''),
      children:[],
      component: () => import('@/views/main/analysis/skill/index.vue')
    }
    allRoutes.push(obj);
  }else {
    allRoutes.push({
      path:a.replace('.ts',''),
      name:a.replace('.ts','').split('/')[2],
      children:[],
      component: () => import('@/views/main/analysis/skill/index.vue')
    })
  }
  }
  )
  console.log( allRoutes,8888)
  // 匹配对应route
  function _recursionAddRoute(menus:any){
    menus.forEach((item:any)=>{
      if(item.type === 2 ) {
        const rout = allRoutes.find((route)=>{
          console.log(item.url,111)
          console.log(route.path,222)
          return route.path === item.url
        })
        console.log(rout,'routeroute')
        if(rout){
          if(!firstMenuPath){
            firstMenuPath = rout
          }
          routes.push(rout)
        }
      }else { 
          _recursionAddRoute(item.children)
      }
    })
  }
  _recursionAddRoute(userMenus)
  return  routes
}
export {
  mapMenus,
  firstMenuPath
}