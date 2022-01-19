<template>
    <div class="layout-header">
        <SvgIcon name="toggle" class="toggle" :class="{ hide: !opened }" @click="toggleSidebar" />
        <Breadcrumb />
        <div class="layout-header-menu">
            <el-dropdown>
                <span class="el-dropdown-link">
                    {{ name }}
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="doLogout">logout</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({ name: 'Navbar' })
</script>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const name = computed(() => store.getters['user/username'])
const doLogout = () => {
    store.dispatch('user/logout')
    router.push('/login')
}
const toggleSidebar = () => {
    store.dispatch('app/toggleSidebar')
}
const opened = computed(() => store.state.app.sidebarOpened)
</script>

<style lang="scss" scoped>
.layout-header {
    height: 100%;
    display: flex;
    align-items: center;
}
.layout-header-menu {
    display: flex;
    justify-content: right;
    margin-left: auto;
}
.toggle {
    font-size: 18px;
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.28s;
    transform: rotate(180deg);
    &.hide {
        transform: rotate(0);
    }
}
</style>
