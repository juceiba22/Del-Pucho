import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://del-pucho-cigarrillo.vercel.app',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
