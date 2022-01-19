<template>
    <el-breadcrumb separator="/">
        <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in levelList" :key="item.path">
                <span>{{ item.meta.title }}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({ name: 'Breadcrumb' })
</script>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const levelList = ref<any[]>([])
onMounted(() => {
    getBreadcrumb()
})
watch(
    () => route.path,
    () => {
        getBreadcrumb()
    }
)
const getBreadcrumb = () => {
    const matched = route.matched.filter(item => item.meta && item.meta.title)
    levelList.value = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
    )
}
</script>

<style lang="scss" scoped></style>
