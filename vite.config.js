import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Arc-ai-website/',
  plugins: [react()],
  server: {
    host: true,
  },
})
