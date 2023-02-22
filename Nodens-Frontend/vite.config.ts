import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server :{
    proxy: {
      '/api/User' : "https://localhost:44384"
    }
  },
  plugins: [react()],
})
