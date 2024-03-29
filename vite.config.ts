import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteArbalest from 'vite-plugin-arbalest'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    plugins: [
        vue({
            script: {
                defineModel: true
            }
        }),
        vueJsx(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: 'types/auto-imports.d.ts'
        }),
        Components({
            dirs: ['src/components'],
            dts: 'types/components.d.ts',
            resolvers: [
                AntDesignVueResolver({
                    importStyle: false,
                    resolveIcons: true
                })
            ]
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: 'icon-[dir]-[name]'
        }),
        viteArbalest()
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    hack: `true; @import (reference) "${resolve('src/style/variables.less')}";`
                }
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
