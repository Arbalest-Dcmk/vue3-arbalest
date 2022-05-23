<template>
    <div class="shadow-box home">
        Home
        <down-outlined />
    </div>
</template>

<script lang="ts" setup name="Home">
import { Modal } from 'ant-design-vue'
const color = ref('#036efe')
onMounted(() => {
    Modal.confirm({
        title: '登录失效',
        content: '登陆失效，请重新登录',
        closable: false,
        maskClosable: false,
        cancelText: '',
        keyboard: false,
        onOk: () => {
            console.log('ok')
        }
    })
})
</script>

<style lang="scss" scoped>
.home {
    color: v-bind(color);
    height: 1600px;
}
</style>
