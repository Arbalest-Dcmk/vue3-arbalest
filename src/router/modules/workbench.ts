import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'
import { shallowRef } from 'vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/workbench',
        component: shallowRef(Layout),
        redirect: '/workbench/task',
        meta: { title: 'Workbench', icon: 'workbench' },
        children: [
            {
                path: 'task',
                name: 'Task',
                component: () => import('@/views/Workbench/Task/index.vue'),
                meta: {
                    title: 'Task'
                }
            },
            {
                path: 'plan',
                name: 'Plan',
                component: () => import('@/views/Workbench/Plan/index.vue'),
                meta: {
                    title: 'Plan',
                    hidden: true
                }
            }
        ]
    }
]

export default routes
