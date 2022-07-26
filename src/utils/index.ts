// download json
export const downloadTxt = (str: string, name = 'text') => {
    const blob = new Blob([str], { type: 'application/json;charset=UTF-8' })
    const downloadUrl = URL.createObjectURL(blob)
    let aLink: HTMLAnchorElement | null = document.createElement('a')
    aLink.href = downloadUrl
    aLink.download = `${name}.txt`
    aLink.click()
    aLink = null
    URL.revokeObjectURL(downloadUrl)
}
