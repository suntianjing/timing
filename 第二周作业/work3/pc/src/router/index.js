import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../components/main/HomePage";
import VideoData from "../components/main/VideoData";
import WorkManage from "../components/main/WorkManage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path:'/index',
    name:'HomePage',
    component: HomePage,
  },
  {
    path:'/work',
    name:'WorkManage',
    component: WorkManage,
  },
  {
    path:'/video',
    name:'VideoData',
    component: VideoData,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
