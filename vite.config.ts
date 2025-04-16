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
  server: {
    allowedHosts: true
  }
})
