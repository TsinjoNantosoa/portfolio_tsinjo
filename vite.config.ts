import { defineConfig } from "vite";
<<<<<<< HEAD
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
=======
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
  assetsInclude: ['**/*.pdf'],
  server: {
    host: "::",
    port: 8080,
  }
});
=======
}));
>>>>>>> a11d90a2e344754d04085594c87810099c858c44
