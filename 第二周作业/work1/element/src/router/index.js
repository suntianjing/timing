import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/main.vue'
import next from  '../views/next.vue'
import login from  '../views/login.vue'


Vue.use(VueRouter)

const routes = [  
  {
    path:'/',
    name:'login',
    component:login,
  },
  {
    path:'/main',
    name:'main',
    component:MainPage,
  },
  {
    path:'/next',
    name:'next',
    component:next,
  },
  {
    path:'/login',
    name:'login',
    component:login,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
