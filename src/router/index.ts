import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/mobile-app',
      name: 'MobileApp',
      component: () => import('../views/services/MobileApp.vue')
    },
    {
      path: '/windows-app',
      name: 'WindowsApp',
      component: () => import('../views/services/WindowsApp.vue')
    },
    {
      path: '/access-control',
      name: 'AccessControl',
      component: () => import('../views/services/AccessControl.vue')
    }
  ]
})

export default router