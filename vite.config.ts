import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // 👈 SUPER IMPORTANT
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "client/public/assets"),
    },
  },

  build: {
    outDir: "../dist", // 👈 Put output in root/dist
    emptyOutDir: true,
  },

  server: {
    port: 5173,
  },
});
