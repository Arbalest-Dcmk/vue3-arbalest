<template>
    <div class="main">
        <router-view v-slot="{ Component, route }">
            <transition :name="route.meta.transition || 'fade-transform'" mode="out-in">
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

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({ name: 'Main' })
</script>

<script lang="ts" setup>
const keepAlive = ref(['Home'])
</script>

<style lang="scss" scoped></style>
