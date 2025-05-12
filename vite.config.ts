import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production', // sourcemaps in dev only
    chunkSizeWarningLimit: 1600, // larger threshold for chunk size warnings
  },
  server: {
    port: 3000, // consistent port
    strictPort: true, // fail if port is in use
  },
  preview: {
    port: 3000 // same as dev server
  }
});