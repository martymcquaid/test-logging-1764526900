import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/41f81990-8837-410b-8aec-41a3a4c49e11/preview/',
  plugins: [react()],
  server: {
    port: 5110,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5110,
    }
  }
})
