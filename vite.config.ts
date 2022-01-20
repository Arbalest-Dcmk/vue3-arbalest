import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import viteSvgIcons from 'vite-plugin-svg-icons';
import viteArbalest from './vite-plugin/vite-plugin-arbalest'

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router', 'vuex'],
            resolvers: [ElementPlusResolver()]
        }),
        Components({
            dirs: ['src/components'],
            dts:true,
            resolvers: [ElementPlusResolver()]
        }),
        viteSvgIcons({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]',
        }),
        viteArbalest()
    ],
    css:{
        preprocessorOptions:{
            scss:{
                additionalData: `@import "./src/style/global.scss";`
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
})
