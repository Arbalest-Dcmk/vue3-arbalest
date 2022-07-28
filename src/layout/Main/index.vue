<template>
    <div class="main">
        <router-view v-slot="{ Component, route }">
            <transition :name="`${route.meta.transition ?? 'layout'}`" mode="out-in">
                <keep-alive :include="keepAlive">
                    <Component
                        :is="Component"
                        :key="route.meta.usePathKey ? route.path : undefined"
                    />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup name="Main">
const keepAlive = ref(['Home'])
</script>

<style lang="less" scoped>
.main {
    overflow-y: scroll;
    padding: 16px 20px 20px;
    box-sizing: border-box;
}
</style>
