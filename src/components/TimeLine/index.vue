<template>
    <div class="time-line">
        <div class="container" ref="containerEl">
            <div
                ref="limitEl"
                class="control-line"
                :style="{ width: `${props.end}%` }"
                @mouseup.stop="handleClick"
            ></div>
            <div
                ref="controlPoint"
                class="control-point"
                :style="{ left: `${limitPercent}%` }"
                @mousedown="handleMouseDown"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup name="TimeLine">
import { useMousePressed, useMouse } from '@vueuse/core'
const containerEl = ref()
const limitEl = ref()
const controlPointEl = ref()
const { x } =useMouse()
const { pressed } =useMousePressed({target:controlPointEl})
const props = defineProps({
    start: {
        type: Number,
        default: 0
    },
    end: {
        type: Number,
        default: 80
    }
})
const percent = ref(props.end)
let moving = ref(false)

const limitPercent = computed(() => percent.value > props.end ? props.end : percent.value < props.start ? props.start : percent.value)

// 点击进度条
const handleClick = (e: MouseEvent) => {
    percent.value = Math.round(x.value* 1000 / limitEl.value.offsetWidth) / 10
}

// 开始拖动进度球
const handleMouseDown = (e: MouseEvent) => {
    console.log('start')
    moving.value = true

}

// 拖动
const handleMouseMove = (e: MouseEvent) => {
    if (!moving.value) return
    console.log(e, lineEl.value.offsetLeft)
    percent.value = Math.round((e.pageX - lineEl.value.offsetLeft) * 1000 / lineEl.value.offsetWidth) / 10
}

// 拖动结束
const handleMouseUp = (e: MouseEvent) => {
    moving.value = false
}

// 拖动结束
const moveStop = () => {
    if (!moving.value) return
    moving.value = false
    console.log(percent.value)
}

onMounted(() => {
    window.addEventListener('blur', moveStop)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', moveStop)
})

onBeforeMount(() => {
    window.removeEventListener('blur', moveStop)
    window.addEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseup', moveStop)
})
</script>

<style lang="scss" scoped>
.time-line {
    width: 100%;
    height: 10px;
}
.container {
    width: 100%;
    height: 100%;
    height: 100%;
    background: #dedede;
    position: relative;
}
.control-line {
    background: #edaff5;
    height: 100%;
    cursor: pointer;
}
.control-point {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #4e6ef2;
    cursor: pointer;
}
</style>