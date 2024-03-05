// vite.config.js
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/@fortawesome[\\/]/': path.resolve(__dirname, 'node_modules/@fortawesome/'),
      'react': 'react', // Puedes necesitar esta línea si surge algún problema
      'react-dom': 'react-dom', // Puedes necesitar esta línea si surge algún problema
    },
  },
});


