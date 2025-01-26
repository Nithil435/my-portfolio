import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap'; // Importing sitemap plugin

// Check if the environment is for GitHub Pages
const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.BASE === 'github';

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
  base: isGitHubPages ? '/my-portfolio/' : '/', // Set base path for GitHub Pages or default
});
