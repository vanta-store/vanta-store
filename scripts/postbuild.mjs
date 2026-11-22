import { copyFileSync, existsSync } from 'node:fs';

// GitHub Pages has no rewrite rules for SPA routes. Serving the same app shell
// as 404.html lets React Router resolve direct visits and page refreshes.
if (!existsSync('dist/index.html')) {
  throw new Error('dist/index.html was not created. Run the Vite build first.');
}
copyFileSync('dist/index.html', 'dist/404.html');
console.log('Created dist/404.html for GitHub Pages SPA routing.');
