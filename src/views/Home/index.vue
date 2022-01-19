<template>
    <div class="home">Home</div>
</template>
<script lang="ts">
export default defineComponent({
    name: 'Home'
})
</script>
<script lang="ts" setup>
const color = ref('#036efe')
</script>

<style lang="scss" scoped>
.home {
    color: v-bind(color);
}
</style>
