const usePagination = (onChangeCallBack?: () => void, extraOptions = {}) => {
    const current = ref(1)
    const pageSize = ref(10)
    const total = ref(0)

    const pagination = reactive({
        total,
        current,
        pageSize,
        pageSizeOptions: ['10', '20', '50', '100'],
        showSizeChanger: true,
        showTotal: (total: number) => `共${total}项数据`,
        onChange: (newCurrent: number, newPageSize: number) => {
            current.value = newCurrent
            pageSize.value = newPageSize
            if (onChangeCallBack) onChangeCallBack()
        },
        ...extraOptions
    })

    return {
        page: current,
        size: pageSize,
        total,
        pagination
    }
}
export default usePagination
