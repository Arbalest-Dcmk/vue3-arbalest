import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import 'element-plus/dist/index.css'
import '@/style/index.scss'
import 'virtual:svg-icons-register'
import '@/router/guide'

createApp(App).use(createPinia()).use(router).mount('#app')
