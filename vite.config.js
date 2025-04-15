import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "http://prod" : "http://localhost:8080",
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
          target: process.env.VITE_API_URL || "http://localhost:8080",
          changeOrigin: true,
          secure: false
        },
      },
    },
  };
});
