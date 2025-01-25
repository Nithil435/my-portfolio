import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap'; // Use default export

const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.BASE === 'github';

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://my-portfolio-chi-livid-74.vercel.app', // Replace with your hostname
      routes: [
        '/',        // Home
        '/about',   // Example route
        '/projects' // Example route
      ],
    }),
  ],
  base: isGitHubPages ? '/my-portfolio/' : '/', // Adjust base path
});
