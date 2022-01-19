import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/system',
        component: shallowRef(Layout),
        redirect: '/system/user',
        meta: { title: 'System', icon: 'config' },
        children: [
            {
                path: 'user',
                name: 'User',
                component: () => import('@/views/System/User/index.vue'),
                meta: {
                    title: 'User'
                }
            },
            {
                path: 'machine',
                name: 'Machine',
                component: () => import('@/views/System/Machine/index.vue'),
                meta: {
                    title: 'Machine'
                }
            }
        ]
    }
]

export default routes
