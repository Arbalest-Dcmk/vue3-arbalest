<template>
    <div class="home">Home

        <TimeLine />
    </div>
</template>

<script lang="ts" setup name="Home">

const color = ref('#036efe')
console.log(global)
 

</script>

<style lang="scss" scoped>
.home {
    color: v-bind(color);
}
</style>
