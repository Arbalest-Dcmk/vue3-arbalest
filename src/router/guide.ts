import router from '@/router'
import { RouteRecordRaw } from 'vue-router'
import { usePermissionStore } from '@/store/permission'
import { useUserStore } from '@/store/user'
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    const permissionStore = usePermissionStore()
    const userStore = useUserStore()

    if (userStore.token) {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            const hasUserInfo = userStore.userInfo.username
            if (hasUserInfo) {
                next()
            } else {
                const res = await userStore.getUserInfo()
                if (res) {
                    permissionStore.generateRoutes()
                    permissionStore.routes.forEach((route: RouteRecordRaw) =>
                        router.addRoute(route)
                    )
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
