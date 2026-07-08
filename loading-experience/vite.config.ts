import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/main.tsx'),
      output: {
        entryFileNames: 'loading-screen.js',
        assetFileNames: 'loading-screen.[ext]',
        format: 'iife',
        name: 'PortfolioLoading',
        inlineDynamicImports: true,
      },
    },
  },
});
