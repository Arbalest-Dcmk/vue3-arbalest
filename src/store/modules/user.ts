import { Module } from 'vuex'
import { RootState } from '../index'
import { storage } from '@/utils'
import apiBus from '@/api'
interface UserInfo {
    id: number
    avatar: string
    username: string
    nickname: string
    isAdmin: boolean
}
export interface UserModule {
    userInfo: UserInfo
}

const user: Module<UserModule, RootState> = {
    namespaced: true,
    state: {
        userInfo: {
            id: 0,
            avatar: '',
            username: '',
            nickname: '',
            isAdmin: false
        }
    },
    getters: {
        username: state => state.userInfo.username
    },
    mutations: {
        setUser(state, userInfo) {
            state.userInfo = userInfo
        },
        resetUser(state) {
            state.userInfo = {
                id: 0,
                avatar: '',
                username: '',
                nickname: '',
                isAdmin: false
            }
        }
    },
    actions: {
        async login({}, loginForm) {
            try {
                // const res = await apiBus.user.login(loginForm)
                // const { accessToken } = res
                // storage.set('access_token', `Bearer ${accessToken}`)
                storage.set('access_token', `Bearer ${'testToken'}`)
                return true
            } catch {
                return false
            }
        },
        async getUserInfo({ commit }) {
            try {
                // const userInfo = await apiBus.user.info()
                const userInfo = {
                    id: 1,
                    avatar: '',
                    username: 'admin',
                    nickname: 'admin',
                    isAdmin: true
                }
                commit('setUser', userInfo)
                return true
            } catch {
                return false
            }
        },
        async logout({ commit }) {
            try {
                storage.remove('access_token')
                commit('resetUser')
                return true
            } catch {
                return false
            }
        }
    }
}

export default user
