import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap'; // Importing sitemap plugin

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      hostname: 'https://my-portfolio-chi-livid-74.vercel.app', // Replace with your actual hostname
      routes: [
        '/',        // Home route
        '/about',   // Example route
        '/projects' // Example route
      ],
    }),
  ],
  base: '/', // Base path for Vercel (no need for GitHub Pages logic)
});
