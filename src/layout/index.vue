<template>
    <div class="layout">
        <el-container>
            <el-aside class="sidebar" :class="{ hide: !appStore.sidebarOpened }">
                <Sidebar />
            </el-aside>
            <el-container>
                <el-header>
                    <Navbar />
                </el-header>
                <el-main>
                    <Main />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup name="Layout">
import Navbar from './Navbar/index.vue'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
</script>

<style lang="scss" scoped>
.layout {
    min-height: 100vh;
}
.el-container {
    min-height: 100vh;
}
.sidebar {
    background: #545c64;
    width: 200px;
    transition: all 0.28s;
    &.hide {
        width: 0;
    }
}
.el-main {
    height: calc(100vh - 60px);
    overflow-y: scroll;
}
</style>
