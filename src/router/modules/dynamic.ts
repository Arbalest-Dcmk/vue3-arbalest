import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/dynamic',
        component: shallowRef(Layout),
        meta: { title: 'Dynamic', icon: 'crawler' },
        children: [
            {
                path: 'page-one',
                name: 'PageOne',
                component: () => import('@/views/Dynamic/PageOne/index.vue'),
                meta: {
                    title: 'PageOne'
                }
            },
            {
                path: 'page-two',
                name: 'PageTwo',
                component: () => import('@/views/Dynamic/PageTwo/index.vue'),
                meta: {
                    title: 'PageTwo'
                }
            }
        ]
    }
]

export default routes
