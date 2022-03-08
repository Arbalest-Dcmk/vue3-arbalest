<template>
    <SvgIcon v-if="icon" :name="icon" class="svg-icon" />
    <span>{{ title }}</span>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'MenuItem' })
</script>

<script lang="ts" setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
const props = defineProps({
    icon: {
        type: String,
        default: ''
    },
    title: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped>
.svg-icon {
    margin-right: 10px;
}
</style>
