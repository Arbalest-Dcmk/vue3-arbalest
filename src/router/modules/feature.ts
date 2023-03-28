import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/feature',
        component: shallowRef(Layout),
        meta: { title: 'Feature', icon: 'crawler' },
        children: [
            {
                path: 'mediainfo',
                name: 'MediaInfo',
                component: () => import('@/views/Feature/MediaInfo/index.vue'),
                meta: {
                    title: 'MediaInfo'
                }
            }
        ]
    }
]

export default routes
