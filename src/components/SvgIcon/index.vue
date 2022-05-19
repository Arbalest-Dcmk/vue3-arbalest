<template>
    <svg aria-hidden="true" class="svg-icon">
        <use :xlink:href="symbolId" />
    </svg>
</template>

<script lang="ts" setup name="SvgIcon">
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon'
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        default: '#333'
    }
})
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: -0.15em;
    overflow: hidden;
}
</style>
