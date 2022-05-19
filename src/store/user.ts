import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const initialUserInfo = () => ({
    id: 0,
    avatar: '',
    username: '',
    nickname: '',
    isAdmin: false
})

export const useUserStore = defineStore('user', () => {
    const token = useStorage('access_token', '')
    const userInfo = ref(initialUserInfo())

    const login = async (formData: Record<string, any>) => {
        console.log(formData)
        token.value = `Bearer ${'this is test Token!'}`
    }

    const getUserInfo = async () => {
        userInfo.value = {
            id: 1,
            avatar: '',
            username: 'admin',
            nickname: 'admin',
            isAdmin: true
        }
        return true
    }

    const logout = () => {
        token.value = null
        userInfo.value = initialUserInfo()
    }

    return {
        token,
        userInfo,
        login,
        logout,
        getUserInfo
    }
})
