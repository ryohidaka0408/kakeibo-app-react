// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // --- ここから追記 ---
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js', // これから作成するセットアップファイル
    css: true, // CSSの解析を有効にする
  },
  // --- ここまで追記 ---
})
