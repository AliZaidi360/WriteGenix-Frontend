import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "public/assets"),
    },
  },

  base: "/", // VERY IMPORTANT FOR VERCEL

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 5173,
  },
});
