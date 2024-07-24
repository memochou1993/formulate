import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    vue(),
    dts({ include: ['lib'] }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/index.ts'),
      name: 'MyLib',
      fileName: (format) => format === 'es' ? 'index.js' : `index.${format}.js`,
    },
    copyPublicDir: false,
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'lib'),
    },
  },
});
