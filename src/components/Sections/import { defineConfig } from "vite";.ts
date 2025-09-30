import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.pdf'],
  server: {
    host: "::",
    port: 8080,
    strictPort: false, // This allows Vite to try other ports if 8080 is in use
  }
});