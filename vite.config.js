import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: false,
  build: {
    outDir: 'dist',
  },
  server: {
    port: 8080,
  },
});
