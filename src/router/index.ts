import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '首页',
    component: Home
  },
]

const router = createRouter({
  // history 模式需要 nginx 或 后端进行相应配置
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
