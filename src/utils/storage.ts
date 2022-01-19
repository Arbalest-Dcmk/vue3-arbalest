import { STORAGE_KEY } from '@/config'

type Storage = {
    set: (key: string, value: any) => void
    get: (key: string) => any
    remove: (key: string) => void
    clear: () => void
}

const storage: Storage = {
    set: (key, value) => {
        localStorage.setItem(`${STORAGE_KEY}_${key}`, value)
    },
    get: key => {
        const val = localStorage.getItem(`${STORAGE_KEY}_${key}`)
        return val
    },
    remove: key => {
        localStorage.removeItem(`${STORAGE_KEY}_${key}`)
    },
    clear: () => {
        localStorage.clear()
    }
}

export default storage
