import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          animations: ['framer-motion', 'motion'],
          ui: ['react-icons', 'react-slick', 'slick-carousel'],
          forms: ['react-hook-form', 'react-helmet-async'],
          utils: ['axios']
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for debugging
    sourcemap: false,
    // Minify CSS
    cssMinify: true,
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/]
    }
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  // Server optimizations
  server: {
    hmr: {
      overlay: false
    }
  }
})
