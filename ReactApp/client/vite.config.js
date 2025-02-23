import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"./",
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure Vite outputs to the right folder
  },
  server: {
    host: '0.0.0.0', // This exposes it to the local network
    port: 5173,      // You can change the port if needed
  },
})
