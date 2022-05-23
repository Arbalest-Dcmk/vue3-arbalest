import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', {
    state: () => ({
        sidebarOpened: useStorage('sidebarOpened', true)
    }),
    actions: {
        toggleSidebar() {
            this.sidebarOpened = !this.sidebarOpened
        }
    }
})
