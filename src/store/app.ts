import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        sidebarOpened: true
    }),
    actions: {
        toggleSidebar() {
            this.sidebarOpened = !this.sidebarOpened
        }
    }
})
