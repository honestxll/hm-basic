import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
    fs: {
      strict: true,
    },
  },
  build: {
    sourcemap: true,
  },
})
