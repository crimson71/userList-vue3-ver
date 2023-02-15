 import {createRouter,createWebHashHistory} from 'vue-router'
import Home from './components/MyHome.vue'
import Login from './components/MyLogin.vue'

import MyGoods from './components/menus/MyGoods.vue'
import MyOrders from './components/menus/MyOrders.vue'
import MyRights from './components/menus/MyRights.vue'
import MySettings from './components/menus/MySettings.vue'
import MyUsers from './components/menus/MyUsers.vue'
import UserDetail from './components/user/MyUserDetail.vue'
 const router = createRouter( {
  history:createWebHashHistory(),
  routes:[
    {path:'/',redirect:'/login'},
    {path:'/home',
    component:Home,
    name:'home',
    children:[
      {path:'users',component:MyUsers,name:'users'},
      {path:'rights',component:MyRights},
      {path:'goods',component:MyGoods},
      {path:'orders',component:MyOrders},
      {path:'settings',component:MySettings},
      {path:'users/:id',component:UserDetail,
    props:true},

    ],
  },
    {path:'/login',component:Login,name:'login'},
    

  ]

 })
//  全局路由导航守卫
 router.beforeEach((to,from,next) => {
  if(to.path === '/login') return next()
  const tokenStr = localStorage.getItem('token')
  if(!tokenStr) {
    return next('/login')
  } else {
    next()
  }

 })

 export default router