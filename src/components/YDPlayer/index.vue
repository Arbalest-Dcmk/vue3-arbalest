<template>
    <div class="yd-container">
        <div class="yd-player" ref="ydEl"></div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, h } from 'vue';
export default defineComponent({
    name: 'YDPlayer'
})
</script>

<script setup>
onMounted(() => {
    init()
})

onBeforeUnmount(() => {
    player && player.stopAll()
    player = null
})

const props = defineProps({
    url: {
        type: String,
        default: 'wss-yd://relay031.yunding360.com:10085/?sn=46EE919C05362&policy=1024&loginkey=j28qGT6kl45zCj8w&auth_token=fff10ac3930feac84b0c03fd145b79db&auth_ts=0215015723'
    }
})

const YD = require('YDPlayerCompatible')
const ydEl = ref()
let player = null

// 初始化
const init = () => {
    player = YD.createPlayer(ydEl.value, { screenX: 1, screenY: 1, multiplePlay: false }, ['native', 'ydplayerjs']);
    player.on('captured', screenShotHandle);// 监听截图
    playLive()
}

// 播放直播
const playLive = () => {
    player.stopAll()
    setTimeout(() => {
        player.openStreaming(props.url, 2)
            .catch(err => {
                console.log(`playLiveErr:${err}`)
                player.stop()
            });
    }, 100);
}

// 播放回放
const playBack = async (time = '2022/2/13 14:00:00') => {
    player.stopAll()
    setTimeout(() => {
        player.openPlayback(props.url, new Date(time))
            .catch(err => {
                console.log(`playBackErr:${err}`)
                player.stop()
            })
    }, 100);
}

// 截图
const screenShotHandle = v => {
    console.log(v)
    // download()
}

const base64ToBlob=code=>{
    
}

const download = (url, name) => {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.setAttribute('download', name);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

defineExpose({
    playLive,
    playBack
})

</script>

<style lang="less" scoped>
.yd-container,
.yd-player {
    width: 100%;
}
::v-deep(.ydplayer) {
    .ydplayer-video.active {
        border: none;
    }
}
</style>