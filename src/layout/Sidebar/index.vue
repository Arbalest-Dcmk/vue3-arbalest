<template>
    <a-menu mode="inline" :collapsed="false" theme="dark">
        <SidebarItem
            v-for="item in menuList"
            :key="item.path"
            :item="item"
            :base-path="item.path"
        />
    </a-menu>
</template>

<script lang="ts" setup name="Sidebar">
import { RouteRecordRaw } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()

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
</script>

<style lang="less" scoped></style>
