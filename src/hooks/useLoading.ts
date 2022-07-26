import { render } from 'vue'
import { Spin } from 'ant-design-vue'
import { debounce } from 'lodash-es'

const useLoading = () => {
    const loading = ref(false)
    const SpinVNode = h(
        'div',
        {
            style: {
                display: 'flex',
                background: 'rgba(0,0,0,0.1)',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 9999
            }
        },
        h(Spin, {
            spinning: true,
            size: 'large',
            tip: '加载中'
        })
    )

    const init = () => {
        const idStr = `globalSpin`
        let el = document.getElementById(idStr)
        if (el === null) {
            el = document.body.appendChild(document.createElement('div'))
            el.id = idStr
        }
        return el
    }

    const container = init()

    let timer: any = null

    const open = () => {
        render(SpinVNode, container)
        timer = setTimeout(close, 1000 * 15)
    }

    const close = () => {
        render(null, container)
        timer = null
    }

    const debounceClose = debounce(close, 200)

    watch(loading, val => {
        val ? open() : debounceClose()
    })

    onBeforeUnmount(() => {
        close()
    })

    return {
        loading
    }
}
export default useLoading
