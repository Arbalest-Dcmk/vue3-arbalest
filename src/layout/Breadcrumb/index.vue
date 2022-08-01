<template>
    <div class="breadcrumb">
        <transition-group mode="out-in" name="breadcrumb">
            <template v-for="(item, index) in routes" :key="item.path">
                <div class="breadcrumb-item">
                    <span>{{ item.meta.title }}</span>
                    <span class="separator" v-show="index < routes.length - 1">/</span>
                </div>
            </template>
        </transition-group>
    </div>
</template>

<script lang="ts" setup name="Breadcrumb">
const route = useRoute()
const routes = computed<any[]>(() =>
    route.matched.filter(item => item.meta?.title && item.meta.breadcrumb !== false)
)
</script>
<style lang="less" scoped>
// transition-group move by flip needs inline-block
.breadcrumb-item {
    display: inline-block;
    color: rgba(0, 0, 0, 0.45);
    &:last-child {
        color: rgba(0, 0, 0, 0.85);
    }
    .separator {
        margin: 0 8px;
    }
}
</style>
