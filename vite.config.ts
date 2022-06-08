import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * 按需导入插件
 */
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


export default defineConfig({
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
