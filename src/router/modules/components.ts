import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/components',
        component: shallowRef(Layout),
        redirect: '/components/control-bar',
        meta: { title: 'Components', icon: 'crawler' },
        children: [
            {
                path: 'control-bar',
                name: 'ControlBar',
                component: () => import('@/views/Components/ControlBar/index.vue'),
                meta: {
                    title: 'ControlBar'
                }
            }
        ]
    }
]

export default routes
