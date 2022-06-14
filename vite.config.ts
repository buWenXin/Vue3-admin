import {fileURLToPath, URL} from 'url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * 按需导入插件
 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

export default defineConfig({
   resolve: {
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url))
      }
   },
   plugins: [
      vue(),
      //按需导入插件
      AutoImport({
         resolvers: [ElementPlusResolver()],
      }),
      //按需导入插件
      Components({
         resolvers: [ElementPlusResolver()],
      }),
   ],
   server: {
      proxy: {
         // 拦截/dev-api路由的请求，转发到target的地址中去
         '/dev-api': {
            target: 'http://192.168.8.115:12306',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/dev-api/, '')
         },
      }
   }
})

