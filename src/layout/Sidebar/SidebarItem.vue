<template>
    <template v-if="!item.children || item.children.length === 0">
        <router-link :to="resolvePath(item.path)">
            <el-menu-item :index="resolvePath(item.path)">
                <MenuItem :icon="item.meta.icon" :title="item.meta.title" />
            </el-menu-item>
        </router-link>
    </template>

    <template v-else>
        <el-sub-menu :index="resolvePath(item.path)">
            <template #title>
                <MenuItem :icon="item.meta.icon" :title="item.meta.title" />
            </template>
            <SidebarItem
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :base-path="resolvePath(item.path)"
            />
        </el-sub-menu>
    </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import path from 'path-browserify'
export default defineComponent({ name: 'SidebarItem' })
</script>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
const props = defineProps({
    item: {
        type: Object,
        required: true
    },
    basePath: {
        type: String,
        required: true
    }
})

const resolvePath = (routePath: string) => path.resolve(props.basePath, routePath)
</script>

<style lang="scss" scoped></style>
