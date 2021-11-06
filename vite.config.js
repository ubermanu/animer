import { resolve } from 'path'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default {
  build: {
    rollupOptions: {
      input: {
        devtools: resolve(__dirname, 'devtools.html'),
        main: resolve(__dirname, 'panel.html')
      }
    }
  },
  plugins: [svelte()]
}
