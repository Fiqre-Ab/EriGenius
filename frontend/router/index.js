import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import AboutPage from '@/components/AboutPage.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/courses', component: () => import('@/components/CoursesPage.vue') },
    { path: '/faculty', component: () => import('@/components/Faculty.vue') },
    { path: '/tuition', component: () => import('@/components/TuitionPage.vue') },
    { path: '/contact', component: () => import('@/components/ContactPage.vue') },
    { path: '/apply', component: () => import('@/components/ApplyNow.vue') }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
