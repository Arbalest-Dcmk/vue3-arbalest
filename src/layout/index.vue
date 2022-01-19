<template>
    <div class="layout">
        <el-container>
            <el-aside class="sidebar" :class="{ hide: !opened }">
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

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({ name: 'Layout' })
</script>

<script lang="ts" setup>
import Navbar from './Navbar/index.vue'
import Main from './Main/index.vue'
import Sidebar from './Sidebar/index.vue'
import { useStore } from 'vuex'
const store = useStore()
const opened = computed(() => store.state.app.sidebarOpened)
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
