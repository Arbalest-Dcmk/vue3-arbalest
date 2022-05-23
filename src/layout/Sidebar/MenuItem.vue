<template>
    <SvgIcon v-if="icon" :name="icon" class="svg-icon" />
    <span>{{ title }}</span>
</template>
<script lang="ts" setup name="MenuItem">
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

<style lang="less" scoped>
.svg-icon {
    margin-right: 10px;
}
</style>
