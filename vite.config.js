import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  // Quando for buildar (npm run build), o base deve ser "/" pra servir no root do seu Nginx
  base: "/",

  plugins: [react()],

  resolve: {
    alias: [
      { find: "@",     replacement: path.resolve(__dirname, "src") },
      { find: "@maps", replacement: path.resolve(__dirname, "src/components/feature/Maps") },
    ],
  },

  // Somente para DEV local: proxy das chamadas /api pra sua API
  server: {
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL || "http://localhost:8080",
        changeOrigin: true,
        secure: false,
       
      },
    },
  },

  // Customizar o build pra entregar os .js/.css na raiz de dist
  build: {
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "[name]-[hash].js",
        chunkFileNames: "chunks/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash].[ext]",
      },
    },
  },
}));
