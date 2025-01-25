import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.BASE === 'github';

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/my-portfolio/' : '/', // Adjust base path
});
