import { defineConfig } from "vite";

export const SERVER_PORT = 5173;
export default defineConfig({
  base: './',
  // ...
  server: {
    port: SERVER_PORT,
  },
});
