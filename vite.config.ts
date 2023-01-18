// import { fileURLToPath, URL } from 'node:url'

// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(), vueJsx()],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//     },
//   },
// })

import { defineConfig, mergeConfig, type UserConfig } from 'vite'
import baseConfig from './configs/vite.config.base'
import devConfig from './configs/vite.config.dev'
import testConfig from './configs/vite.config.test'
import prodConfig from './configs/vite.config.prod'

interface conifigs {
  [key: string]: () => UserConfig
}

const configResolver: conifigs = {
  development: () => {
    return mergeConfig(baseConfig, devConfig)
  },
  test: () => mergeConfig(baseConfig, testConfig),
  production: () => mergeConfig(baseConfig, prodConfig),
}

export default defineConfig(({ command, mode }) => {
  const config = configResolver[mode]()
  return config
})
