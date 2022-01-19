// 触底加载
import { onMounted, onBeforeUnmount } from 'vue'
import { debounce } from 'lodash-es'
export default function onReachBottom(callBack: () => void) {
    const scrollHandle = () => {
        const h = window.innerHeight
        const top = document.documentElement.scrollTop
        const H = document.body.offsetHeight
        h + top >= H && callBack()
    }
    const _scrollHandle = debounce(scrollHandle, 300)

    onMounted(() => {
        window.addEventListener('scroll', _scrollHandle)
    })

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', _scrollHandle)
    })
}
