import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: '首页',
            component: Home
        },
        {
            path: '/login',
            name: '登录',
            component: () => import("@/views/Login.vue")
        }
    ]
})

export default router
