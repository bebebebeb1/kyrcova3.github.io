import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  root: 'src', // <- обов’язково, бо index.html у src
  build: {
    outDir: '../dist', // збірка в корінь проєкту
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html',        // відносно root: 'src'
        favorites: './favorites.html' // якщо потрібен
      }
    }
  },
  plugins: [
    injectHTML(),
    FullReload(['./**/*.html']), // слідкує за src/**/*.html
    SortCss({ sort: 'mobile-first' })
  ]
});
