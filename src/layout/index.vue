<template>
    <div class="layout">
        <a-layout>
            <a-layout-sider :collapsed="appStore.sidebarOpened" class="sidebar">
                <Sidebar />
            </a-layout-sider>
            <a-layout class="container">
                <a-layout-header class="header"><Navbar /></a-layout-header>
                <a-layout-content class="main" padding="0"><Main /></a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>

<script lang="ts" setup name="Layout">
import Navbar from './Navbar/index.vue'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>

<style lang="less" scoped>
.layout {
    min-height: 100vh;
}
.sidebar {
    background: @primary-bg;
}
.container {
    background: @container-bg;
}
.header {
    background: @page-bg;
    padding: 0 20px;
}
.main {
    height: calc(100vh - 64px);
}
</style>
