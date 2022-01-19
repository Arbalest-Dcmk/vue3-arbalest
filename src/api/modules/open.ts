import { request } from '@/utils'
export default {
    // 图片
    imageList(params: Record<string, any>) {
        return request({
            url: 'https://api.apiopen.top/getImages',
            params
        })
    }
}
