import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      modules: '/src/modules',
      hooks: '/src/hooks',
      pages: '/src/pages',
      '@redux': '/src/redux',
      shared: '/src/shared',
      context: '/src/context',
      services: '/src/services',
    },
  },
  base: '/camper-rent-project/',
});
