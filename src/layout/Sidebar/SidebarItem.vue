<template>
    <template v-if="item.children?.length > 0">
        <a-sub-menu :key="item.path">
            <template v-if="item.meta.icon" #icon>
                <SvgIcon :name="item.meta.icon" class="svg-icon" />
            </template>
            <template #title>
                <span>{{ item.meta.title }}</span>
            </template>
            <SidebarItem
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :base-path="resolvePath(item.path)"
            />
        </a-sub-menu>
    </template>

    <template v-else>
        <a-menu-item :key="item.redirect ? item.redirect : resolvePath(item.path)">
            <template v-if="item.meta.icon" #icon>
                <SvgIcon :name="item.meta.icon" class="svg-icon" />
            </template>
            <span>{{ item.meta.title }}</span>
        </a-menu-item>
    </template>
</template>

<script lang="ts" setup name="SidebarItem">
import path from 'path-browserify'
import SvgIcon from '@/components/SvgIcon/index.vue'
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

<style lang="less" scoped></style>
