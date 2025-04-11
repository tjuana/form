import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/form/',
  server: {
    port: 7777,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@components': '/src/components',
      '@features': '/src/features',
      '@lib': '/src/lib',
      '@pages': '/src/pages',
      '@store': '/src/store',
      '@sceletons': '/src/sceletons',
    },
  },
})