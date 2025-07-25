import { defineConfig } from "file:///home/hp/Desktop/david-portfolio-showcase/node_modules/vite/dist/node/index.js";
import react from "file:///home/hp/Desktop/david-portfolio-showcase/node_modules/@vitejs/plugin-react-swc/index.mjs";
import path from "path";
import { componentTagger } from "file:///home/hp/Desktop/david-portfolio-showcase/node_modules/lovable-tagger/dist/index.js";
var __vite_injected_original_dirname = "/home/hp/Desktop/david-portfolio-showcase";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
