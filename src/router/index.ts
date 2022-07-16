import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '',
    redirect: 'all'
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
  },
  {
    path: '/counter',
    name: '',
    component: () => import('@/views/counter.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

export default router;
