import { defineConfig } from 'vite'
import configCompressPlugin from './plugins/compress'

export default defineConfig({
  plugins: [configCompressPlugin('gzip')],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // arco: ['@arco-design/web-vue'],
          // chart: ['echarts', 'vue-echarts'],
          vue: [
            'vue',
            'vue-router',
            'pinia',
            // '@vueuse/core', 'vue-i18n'
          ],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
})
