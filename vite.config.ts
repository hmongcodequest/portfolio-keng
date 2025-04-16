import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || '/',
  preview: {
		port: 5173,
		strictPort: true,
		host: '0.0.0.0', 
		allowedHosts: true,
	},
  build: {
    chunkSizeWarningLimit: 1000, // Increase size limit to 1000kb
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router'],
          'motion-vendor': ['framer-motion'],
          'icons-vendor': ['react-icons'],
          // Group other common dependencies
          'utils-vendor': ['md5', 'styled-components'],
        }
      }
    }
  },
  server: {
    allowedHosts: true
  }
})
