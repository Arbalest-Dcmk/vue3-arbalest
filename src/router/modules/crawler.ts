import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/crawler',
        component: shallowRef(Layout),
        redirect: '/crawler/theme',
        meta: { title: 'Crawler', icon: 'crawler' },
        children: [
            {
                path: 'theme',
                name: 'Theme',
                component: () => import('@/views/Crawler/Theme/index.vue'),
                meta: {
                    title: 'Theme'
                }
            },
            {
                path: 'script',
                name: 'Script',
                component: () => import('@/views/Crawler/Script/index.vue'),
                meta: {
                    title: 'Script'
                }
            }
        ]
    }
]

export default routes
