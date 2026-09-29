import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true' ? '/Mumbai_visit/' : '/',
  server: {
    port: 5173,
    strictPort: true,
  },
});
