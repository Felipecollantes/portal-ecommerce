import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

// Obtener __dirname equivalente en ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@domain': resolve(__dirname, './src/domain'),
      '@application': resolve(__dirname, './src/application'),
      '@infrastructure': resolve(__dirname, './src/infrastructure'),
      '@ui': resolve(__dirname, './src/ui'),
      '@config': resolve(__dirname, './src/config'),
    }
  },
  // Variables de entorno para el frontend
  define: {
    // Hacer disponibles las variables de entorno con prefijo VITE_
    '__ENV__': {
      VITE_EMAILJS_SERVICE_ID: JSON.stringify(process.env.VITE_EMAILJS_SERVICE_ID),
      VITE_EMAILJS_TEMPLATE_ID: JSON.stringify(process.env.VITE_EMAILJS_TEMPLATE_ID),
      VITE_EMAILJS_PUBLIC_KEY: JSON.stringify(process.env.VITE_EMAILJS_PUBLIC_KEY)
    }
  }
})
