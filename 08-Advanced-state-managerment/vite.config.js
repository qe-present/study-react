import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  plugins: [react()],
  build: {
    outDir: "../08-build",
    assetsDir: "assets",
    rollupOptions: {
      input: "./index.html",
      output: {
        entryFileNames: "assets/js/[name].[hash].js",
        chunkFileNames: "assets/js/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]"
      }
    }
  }
})
