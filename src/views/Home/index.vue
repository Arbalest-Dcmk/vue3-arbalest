<template>
    <div class="home">Home</div>
</template>

<script lang="ts" setup name="Home">
const color = ref('#036efe')
</script>

<style lang="scss" scoped>
.home {
    color: v-bind(color);
}
</style>
