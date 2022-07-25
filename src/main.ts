import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import 'ant-design-vue/dist/antd.less'
import '@/style/index.less'
import 'virtual:svg-icons-register'
import '@/router/guide'

createApp(App).use(createPinia()).use(router).mount('#app')
