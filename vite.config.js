import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
})
export default {
  server: {
    port: process.env.PORT || 10000, // Default to 10000, or use the port provided by Render
    host: '0.0.0.0', // Ensure it's accessible externally
  },
}
