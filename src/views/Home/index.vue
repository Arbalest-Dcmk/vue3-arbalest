<template>
    <div class="shadow-box home">
        Home
        <down-outlined />
        <up-outlined />
    </div>
</template>

<script lang="ts" setup name="Home">
const color = ref('#036efe')
</script>

<style lang="scss" scoped>
.home {
    color: v-bind(color);
    height: 1600px;
}
</style>
