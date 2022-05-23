<template>
    <div class="layout-header">
        <SvgIcon name="toggle" class="toggle" :class="{ hide: !opened }" @click="toggleSidebar" />
        <Breadcrumb />
        <div class="layout-header-menu">
            <a-dropdown trigger="click" class="user-dropdown">
                <span class="el-dropdown-link"> {{ user.username }} <down-outlined /> </span>
                <template #overlay>
                    <a-menu>
                        <a-menu-item @click="doLogout">logout</a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup name="Navbar">
import SvgIcon from '@/components/SvgIcon/index.vue'
import Breadcrumb from '../Breadcrumb/index.vue'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
const user = computed(() => userStore.userInfo)
const doLogout = () => {
    userStore.logout()
    router.push('/login')
}
const toggleSidebar = () => {
    appStore.toggleSidebar()
}
const opened = computed(() => appStore.sidebarOpened)
</script>

<style lang="less" scoped>
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

.user-dropdown {
    cursor: pointer;
}
</style>
