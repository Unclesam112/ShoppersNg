import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      
      '@': fileURLToPath(new URL('./src', import.meta.url));
      '@iconify/vue': '@iconify/vue/dist/vue.mjs', // Adjust the path based on your project structure
    },
    }
  },

  build: {
    rollupOptions: {
      external: ['axios']
    }
  }
})
