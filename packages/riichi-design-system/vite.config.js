// vite.config.js
const { defineConfig } = require('vite')
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
  plugins: [vue()],

  build: {
    lib: {
      entry: './src/main.js',
      name: 'riichi-design-system',
      fileName: (format) => `riichi-design-system.${format}.js`
    },

    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue'],

      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})