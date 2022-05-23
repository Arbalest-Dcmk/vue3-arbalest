import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { shallowRef } from 'vue'
import Layout from '@/layout/index.vue'
import componentsRoutes from './modules/components'
export const NotFound: RouteRecordRaw = {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { hidden: true },
    component: () => import('@/views/404/index.vue')
}

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        meta: { hidden: true },
        component: () => import('@/views/Login/index.vue')
    },
    {
        path: '/',
        component: shallowRef(Layout),
        redirect: '/home',
        meta: { title: 'Home', icon: 'index' },
        children: [
            {
                path: 'home',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
                meta: {
                    title: 'Home',
                    hidden: false,
                    activeMenu: '/'
                }
            }
        ]
    }
]

export const asyncRoutes: Array<RouteRecordRaw> = [...componentsRoutes]

export const resetRouter = () =>
    createRouter({
        history: createWebHashHistory(),
        routes: constantRoutes
    })

const router = resetRouter()

export default router
