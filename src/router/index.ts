import {createRouter, createWebHistory} from 'vue-router'
import type {RouteLocationNormalized} from "vue-router";

import {MyCache} from "@/utils/MyCache";
import {useUserStore} from "@/stores/user";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        //配置路由映射
        {
            path: "/",
            redirect: "/home/index"
        },
        {
            path: "/home",
            name: "home",
            component: () => import("@/layout/home/home.vue"),
            redirect: "/home/index",
            children: [
                {
                    path: "index",
                    meta: {title: "首页"},
                    component: ()=>import("@/views/base/index/Index.vue"),
                },
            ]
        },
        {
            path: '/login',
            name: '登录',
            component: () => import("@/views/Login.vue")
        }
    ]
})

export default router;

