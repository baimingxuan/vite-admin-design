import { defineConfig, loadEnv } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
// 需要安装插件 @types/node -> yarn add @types/node -D
import { resolve } from 'path'

export default defineConfig(({command, mode}) => {
  const root = process.cwd()
  const viteEnv = loadEnv(mode, root)

  const { VITE_PUBLIC_PATH, VUE_APP_BASE_API } = viteEnv
  console.log(VUE_APP_BASE_API)
  return {
    root,
    base: VITE_PUBLIC_PATH,
    server: {
      port: 3060,
      open: true,
      cors: true,
      proxy: {
        '/user': {
          target: 'http://42.194.194.178:3000',
          changeOrigin: true
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      createVuePlugin()
    ]
  }
})
