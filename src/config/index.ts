const env = import.meta.env.MODE === 'production' ? 'prod' : 'dev'

console.log('env: ', env)

const envConfig = {
    dev: {
        baseUrl: '/api'
    },
    prod: {
        baseUrl: '/api'
    }
}
export const TOKEN_KEY = 'Authorization'
export const STORAGE_KEY = 'arbalest'

export default {
    ...envConfig[env]
}
