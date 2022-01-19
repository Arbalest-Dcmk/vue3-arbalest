import router from '@/router'
import store from '@/store'
import { storage } from '@/utils'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    const token = storage.get('access_token')
    if (token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const hasUserInfo = store.getters['user/username']
            if (hasUserInfo) {
                next()
            } else {
                const res = await store.dispatch('user/getUserInfo')
                if (res) {
                    store.dispatch('permission/generateRoutes')
                    store.state.permission.routes.forEach(route => router.addRoute(route))
                    next({ ...to, replace: true })
                } else {
                    next(`/login?redirect=${to.path}`)
                }
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})
