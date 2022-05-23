import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'normalize.css'
import 'ant-design-vue/es/modal/style/css'
import 'ant-design-vue/es/message/style/css'
import '@/style/index.less'
import 'virtual:svg-icons-register'
import '@/router/guide'

createApp(App).use(createPinia()).use(router).mount('#app')
