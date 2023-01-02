import { URL, fileURLToPath } from 'node:url'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { svgBuilder } from './src/plugins/svgBuilder'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgBuilder('./src/assets/icons/')],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 全域用 & 共用的元件的css，注意import順序
        additionalData: `
          @import "./src/scss/helpers/_variable.scss";
          @import "./src/scss/helpers/_viewport.scss";
          @import "./src/scss/components/buttonStyle.scss";
        `,
      },
    },
  },
})
