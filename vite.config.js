import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://sanpitka.github.io/sanpitka/ — a project site, because the
  // repo is named `sanpitka` (which is what makes README.md the profile README).
  // Use asset() from src/lib/asset.js for anything in public/ so this base applies.
  base: '/sanpitka/',
  plugins: [react()],
})
