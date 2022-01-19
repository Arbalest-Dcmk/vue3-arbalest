import { Module } from 'vuex'
import { RootState } from '../index'

export interface AppModule {
    sidebarOpened: boolean
}

const app: Module<AppModule, RootState> = {
    namespaced: true,
    state: {
        sidebarOpened: true
    },
    mutations: {
        toggleSidebar: state => {
            state.sidebarOpened = !state.sidebarOpened
        }
    },
    actions: {
        toggleSidebar({ commit }) {
            commit('toggleSidebar')
        }
    }
}

export default app
