/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    include: ['src/**/*.test.{ts,tsx}'],
  },
  resolve: {
    alias: {
      '@': '/src',
      '@api': '/src/api',
      '@features': '/src/features',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@lib': '/src/lib',
      '@store': '/src/store',
      '@sceletons': '/src/sceletons',
    },
  },
})