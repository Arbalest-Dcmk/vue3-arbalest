<template>
    <div class="breadcrumb">
        <a-breadcrumb>
            <a-breadcrumb-item v-for="item in levelList" :key="item.path">{{
                item.meta.title
            }}</a-breadcrumb-item>
        </a-breadcrumb>
    </div>
</template>

<script lang="ts" setup name="Breadcrumb">
const route = useRoute()
const levelList = ref<any[]>([])
const getBreadcrumb = () => {
    const matched = route.matched.filter(item => item.meta?.title)
    levelList.value = matched.filter(item => item.meta?.title && item.meta.breadcrumb !== false)
}
watchEffect(getBreadcrumb)
</script>
<style lang="less" scoped></style>
