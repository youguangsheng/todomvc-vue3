import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/all',
    name: '',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/acitve',
    name: '',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/complete',
    name: '',
    component: () => import('@/views/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
