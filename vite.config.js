import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@maps", replacement: path.resolve(__dirname, "src/components/feature/Maps") },
    ],
  },
  server: {
    proxy: {
      "/api": {
        target: "https://adotme-api-hjg3egfuhhgzecdw.brazilsouth-01.azurewebsites.net/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
