import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { SitemapPlugin } from 'vite-plugin-sitemap';

// Determine if we are deploying to GitHub Pages
const isGitHubPages = process.env.NODE_ENV === 'production' && process.env.BASE === 'github';

export default defineConfig({
  plugins: [
    react(),
    SitemapPlugin({
      hostname: 'https://my-portfolio-chi-livid-74.vercel.app', // Replace with your actual hostname
      routes: [
        '/',        // Home
        '/about',   // Example route for the About page
        '/projects' // Example route for a Projects page
      ],
    }),
  ],
  base: isGitHubPages ? '/my-portfolio/' : '/', // Adjust base path for deployment
});
