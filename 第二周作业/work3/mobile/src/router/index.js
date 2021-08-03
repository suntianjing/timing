import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from "../views/IndexPage";
import MyMsg from "../views/MyMsg";
import ServingWheat from "../views/ServingWheat";
import test from "../views/test";
import RandomJoin from "../views/RandomJoin";

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    name:'index',
    component: IndexPage
  },
  {
    path:'/my',
    name:'my',
    component: MyMsg
  },
  {
    path:'/Serving',
    name:'ServingWheat ',
    component: ServingWheat
  },
  {
    path: '/test',
    name:'test',
    component: test
  },
  {
    path:'/join',
    name:'RandomJoin',
    component: RandomJoin
  }

]

const router = new VueRouter({
  routes
})

export default router
