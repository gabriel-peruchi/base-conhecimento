import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/home/Home.vue')
  },
  {
    path: '/admin',
    name: 'AdminPages',
    component: () => import('@/components/admin/AdminPages.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
