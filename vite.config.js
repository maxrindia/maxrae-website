import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

// Plugin to support clean directory index files in dist (e.g. /services/index.html)
function cleanUrlsBuildPlugin() {
  return {
    name: 'clean-urls-build',
    closeBundle() {
      const distDir = resolve(__dirname, 'dist');
      const pages = ['services', 'about', 'contact', 'blog', 'industries'];
      
      pages.forEach((page) => {
        const htmlFile = resolve(distDir, `${page}.html`);
        if (fs.existsSync(htmlFile)) {
          const pageDir = resolve(distDir, page);
          if (!fs.existsSync(pageDir)) {
            fs.mkdirSync(pageDir, { recursive: true });
          }
          fs.copyFileSync(htmlFile, resolve(pageDir, 'index.html'));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [
    react(),
    cleanUrlsBuildPlugin(),
    // Clean URLs dev server middleware: maps /services -> /services.html
    {
      name: 'clean-urls-dev',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url.split('?')[0];
          const cleanPaths = ['/services', '/about', '/contact', '/blog', '/industries'];
          if (cleanPaths.includes(url)) {
            req.url = `${url}.html${req.url.includes('?') ? '?' + req.url.split('?')[1] : ''}`;
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'services.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        blog: resolve(__dirname, 'blog.html'),
        industries: resolve(__dirname, 'industries.html')
      }
    }
  },
  server: {
    port: 3000,
    open: false
  }
});
