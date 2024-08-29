// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BookView from '@/views/BookView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/book/:path',
        name: 'book',
        component: BookView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    }
]


const router = createRouter({ history: createWebHistory(), routes })
export default router

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0) // Esto hace que la página se desplace hasta la parte superior de la página en cada cambio de ruta.
    next()
  })