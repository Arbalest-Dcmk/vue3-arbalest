const useMediaInfo = () => {
    const MediaInfo = window.MediaInfo
    let mediainfo: any = null

    const init = async () => {
        if (!mediainfo) {
            mediainfo = await MediaInfo({
                format: 'object',
                locateFile: (path: string, prefix: string) => prefix + path // Make sure WASM file is loaded from CDN location
            })
        }
    }

    init()

    const getFileInfo = (file: File) => {
        if (!file || !mediainfo) return
        const readChunk = (chunkSize: number, offset: number) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onload = (event: any) => {
                    if (event.target.error) {
                        reject(event.target.error)
                    }
                    resolve(new Uint8Array(event.target.result))
                }
                reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
            })

        return mediainfo.analyzeData(() => file.size, readChunk)
    }

    return {
        getFileInfo
    }
}

export default useMediaInfo
