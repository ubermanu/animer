import { resolve } from 'path'

export default {
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/devtools.html'),
        panel: resolve(__dirname, 'src/panel.html')
      }
    }
  }
}
