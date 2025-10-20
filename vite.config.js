import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

<<<<<<< HEAD
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_ENV === 'github' ? '/Countries/' : './',
=======
<<<<<<< HEAD
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/Countries/',
=======
export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_ENV === 'github' ? '/Countries/' : './',
>>>>>>> b6198cb (update vercel)
>>>>>>> 5365f78
})
