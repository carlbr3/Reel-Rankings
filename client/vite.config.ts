import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: parseInt(process.env.PORT || "3000"),
    host: true,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "reel-rankings.onrender.com",
      ".onrender.com",
    ],
  },
  preview: {
    port: parseInt(process.env.PORT || "3000"),
    host: true,
    strictPort: true,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "reel-rankings.onrender.com",
      ".onrender.com",
    ],
  },
});
