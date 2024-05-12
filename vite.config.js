import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Worms-Website/',
  plugins: [react()],
  assetsInclude: ['src/assets/*.png', 'src/assets/*.svg', 'src/assets/*.pdf']
})
