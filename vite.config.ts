import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {AntdResolve, createStyleImportPlugin} from 'vite-plugin-style-import';

// const target = 'https://a.5810a957f4121923619d86408a6e07d2.me:444/';
// const target = 'https://fat.5810a957f4121923619d86408a6e07d2.me:446/';
const target = 'http://phemex-admin-dev.cmexpro.com/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createStyleImportPlugin({
      resolves: [AntdResolve()],
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    proxy: {
      '/api/root': {
        target,
        changeOrigin: true,
      },
      '/phemex-admin': {
        target,
        changeOrigin: true,
      },
    },
  },
});
