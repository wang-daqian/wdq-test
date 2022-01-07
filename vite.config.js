import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'

const { resolve } = require("path")

export default defineConfig({
  plugins: [vuePlugin()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
