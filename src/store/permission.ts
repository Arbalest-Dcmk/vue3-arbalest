import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes, NotFound } from '@/router'

interface PermissionState {
    routes: RouteRecordRaw[]
    dynamicRoutes: RouteRecordRaw[]
}

export const usePermissionStore = defineStore('permission', {
    state: () =>
        <PermissionState>{
            routes: [],
            dynamicRoutes: []
        },
    actions: {
        generateRoutes(addRoutes = asyncRoutes) {
            this.routes = [...constantRoutes, ...addRoutes, NotFound]
            this.dynamicRoutes = addRoutes
        }
    }
})
