const useSelection = ({ rowKey = 'id', disabled = false, ...options }) => {
    const selectedRows = ref<any[]>([])
    const selectedKeys = computed(() => selectedRows.value.map(item => item[rowKey]))
    const onSelectChange = (keys: any[], rows: any[]) => {
        selectedRows.value = [...rows]
    }

    const rowSelection = reactive<any>({
        selectedRowKeys: selectedKeys,
        onChange: onSelectChange,
        getCheckboxProps: () => ({ disabled }),
        ...options
    })

    return {
        rowSelection,
        selectedRows,
        selectedKeys,
        rowKey
    }
}
export default useSelection
