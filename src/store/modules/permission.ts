import { Module } from 'vuex'
import { RootState } from '../index'
import { RouteRecordRaw } from 'vue-router'
import { constantRoutes, asyncRoutes, NotFound } from '@/router'

export interface PermissionModule {
    routes: RouteRecordRaw[]
    dynamicRoutes: RouteRecordRaw[]
}

const permission: Module<PermissionModule, RootState> = {
    namespaced: true,
    state: {
        routes: [],
        dynamicRoutes: []
    },
    mutations: {
        setRoutes: (state, routes) => {
            state.routes = [...constantRoutes, ...routes, NotFound]
            state.dynamicRoutes = routes
        }
    },
    actions: {
        generateRoutes({ commit }) {
            commit('setRoutes', asyncRoutes)
        }
    }
}

export default permission
