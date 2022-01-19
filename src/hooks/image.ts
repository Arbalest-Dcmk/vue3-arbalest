// 图片
import apiBus from '@/api'
import { ref, onMounted, watch } from 'vue'

export default function imageHook() {
    const page = ref(1)
    const size = ref(20)
    const imageList = ref([])
    const getImageList = async () => {
        const res = await apiBus.open.imageList({ page: page.value, count: size.value })
        page.value === 1 && (imageList.value = [])
        imageList.value.push(...(res.result as []))
    }

    onMounted(getImageList)
    watch(page, getImageList)

    return {
        imageList,
        page,
        size,
        getImageList
    }
}
