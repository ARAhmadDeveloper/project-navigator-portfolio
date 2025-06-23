import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ...(mode === 'development' ? [componentTagger()] : []),
  ],
  build: {
    chunkSizeWarningLimit: 1000, // optional: silence that 500kb warning
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          shadcn: ['@radix-ui/react-icons', 'class-variance-authority'],
          vendor: ['@tanstack/react-query'],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
