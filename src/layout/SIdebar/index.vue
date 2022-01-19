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

<script lang="ts">
import { defineComponent, computed } from 'vue'
export default defineComponent({ name: 'Sidebar' })
</script>

<script lang="ts" setup>
import { useStore } from 'vuex'
import { RouteRecordRaw, useRoute } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
const store = useStore()
const route = useRoute()

const routes = computed(() => store.state.permission.routes)
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
