<template>
    <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            :default-active="activeMenu"
            text-color="#fff"
        >
            <SidebarItem
                v-for="item in menuList"
                :key="item.path"
                :item="item"
                :base-path="item.path"
            />
        </el-menu>
    </el-scrollbar>
</template>

<script lang="ts" setup name="Sidebar">
import { RouteRecordRaw, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()
const route = useRoute()

const routes = computed(() => permissionStore.routes)
const menuList = computed(() => filterHideRouter(routes.value))

const filterHideRouter = (routes: RouteRecordRaw[]): RouteRecordRaw[] =>
    routes.filter(item => {
        if (!item.meta || item.meta.hidden !== true) {
            if (item.children && item.children.length) {
                item.children = filterHideRouter(item.children)
            }
            return true
        }
        return false
    })

const activeMenu = computed(() => {
    const { meta, path } = route
    if (meta.activeMenu) {
        return String(meta.activeMenu)
    }
    return String(path)
})
</script>

<style lang="scss" scoped></style>
