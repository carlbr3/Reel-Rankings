import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
  };

  if (command !== 'serve') {
    config.base = '/';
  }

  return {
    ...config,
    server: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0',
    },
    preview: {
      port: process.env.PORT || 3000,
      host: '0.0.0.0',
    }
  };
});
