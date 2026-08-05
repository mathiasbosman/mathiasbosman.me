import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'url';
import react from '@vitejs/plugin-react';

export const SERVER_PORT = 5173;
export default defineConfig({
  resolve: {
    alias: [
      // see tsconfig.json
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: '@models',
        replacement: fileURLToPath(new URL('./src/models', import.meta.url)),
      },
    ],
  },
  server: {
    port: SERVER_PORT,
  },
  plugins: [react()],
});
