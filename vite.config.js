import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"https://klauditha.github.io/desafio_react2_prueba",
  plugins: [react()],
})
