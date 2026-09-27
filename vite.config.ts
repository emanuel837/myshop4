import { defineConfig } from 'vite'

// myShop 4 is retired: the build is a static redirect page (index.html) to
// myShop 4.1 plus a self-destroying service worker (public/sw.js).
export default defineConfig({
  build: {
    // Avoid terser hanging during closeBundle in some environments.
    minify: 'esbuild',
  },
})
