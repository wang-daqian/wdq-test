import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const { resolve } = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vuePlugin(), vueJsx()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
