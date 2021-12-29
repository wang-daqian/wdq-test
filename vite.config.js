import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import viteSSR from 'vite-ssr/plugin'
  // plugins: [vue(), viteSSR()],

const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
