/* eslint-disable no-undef */
import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  rules: {
    "react/prop-types": 0,
  },
  server: {
    allowedHosts: [
      // Allow ALL localtunnel domains
      '*.loca.lt',
      // or allow a specific one
      // 'ripe-badgers-mix.loca.lt'
    ]
  }
});