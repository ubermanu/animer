import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'devtools.html'),
        panel: resolve(__dirname, 'panel.html')
      }
    }
  }
}
