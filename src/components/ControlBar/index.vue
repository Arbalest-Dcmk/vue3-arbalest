<template>
    <div class="control-bar" @dragenter.prevent @dragover.prevent>
        <div class="actions">
            <div class="action-item">play</div>
            <div class="action-item">stop</div>
            <div class="action-item">fullScreen</div>
        </div>
        <div class="progress-bar" ref="el">
            <div class="limit-bar" :style="{ width: minutesToPercent(limit) + '%' }"></div>
            <div class="played-bar" :style="{ width: minutesToPercent(progress) + '%' }"></div>
        </div>
        <div class="show-time">{{ nowTime }} / 24:00</div>
    </div>
</template>

<script lang="ts" setup name="ControlBar">
import { useMouseInElement, useMousePressed, useEventListener, onLongPress } from '@vueuse/core'
const el = ref(null)
const { x, elementPositionX, elementWidth } = useMouseInElement(el)
const { pressed } = useMousePressed({ target: el })
const dragging = ref(false) //是否正在长按拖动
const emits = defineEmits(['onProgress'])
// 改变进度条
const setProgress = () => {
    const calc = ((x.value - elementPositionX.value) * 1440) / elementWidth.value
    const result = calc > limit.value ? limit.value : calc < 0 ? 0 : calc
    progress.value = Math.floor(result)
}
// 提交进度更新
const updateProgress = () => {
    console.log(progressTimeStamp.value)
    emits('onProgress')
}
// 拖动进度条
useEventListener(document, 'mousemove', () => {
    if (dragging.value && pressed.value) {
        setProgress()
    }
})
// 点击进度条
useEventListener(el, 'mouseup', e => {
    if (!dragging.value) {
        setProgress()
        updateProgress()
    }
})
// 鼠标按下超过100ms判定为进行拖动,否则为点击
onLongPress(
    el,
    () => {
        dragging.value = true
    },
    { delay: 100 }
)
// 监听拖动结束
watch(
    () => pressed.value,
    val => {
        if (!val) {
            if (dragging.value) {
                updateProgress()
            }
            dragging.value = false
        }
    }
)

// 进度:分钟数
const progress = ref(0)
// 返回进度时间戳
const progressTimeStamp = computed(
    () => new Date(new Date(new Date().toLocaleDateString()).setMinutes(progress.value))
)
// 回显当前进度时间
const nowTime = computed(() => {
    const hours = progressTimeStamp.value.getHours()
    const minutes = progressTimeStamp.value.getMinutes()
    return `${hours >= 10 ? hours : '0' + hours}:${minutes >= 10 ? minutes : '0' + minutes}`
})
// 当前时间:分钟数
const limit = ref(0)
const getTimeLimit = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const spendMinutes = 60 * hours + minutes
    limit.value = spendMinutes
    progress.value = spendMinutes
}
// 当前分钟数计算百分比用于进度条宽度计算
const minutesToPercent = val => (val * 100) / 1440
onMounted(() => {
    getTimeLimit()
})
</script>

<style lang="scss" scoped>
$barHeight: 5px;
.control-bar {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    user-select: none;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.actions {
    display: flex;
    .action-item {
        color: rgba(255, 255, 255, 0.6);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        margin: 5px;
        &:hover {
            color: rgba(255, 255, 255, 1);
        }
    }
}
.progress-bar {
    margin: 0 5px;
    cursor: pointer;
    width: 100%;
    position: relative;
    height: $barHeight;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 2px;
    .limit-bar {
        position: absolute;
        left: 0;
        top: 0;
        border-radius: calc($barHeight / 2);
        width: 80%;
        height: 100%;
        background: rgba(255, 255, 255, 0.4);
        z-index: 1;
    }
    .played-bar {
        width: 40%;
        height: 100%;
        border-radius: calc($barHeight / 2);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
        background-color: rgba(255, 255, 255, 1);
        &::after {
            content: '';
            width: calc($barHeight * 2);
            height: calc($barHeight * 2);
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translate(50%, -50%);
        }
    }
}
.show-time {
    flex-shrink: 0;
}
</style>
