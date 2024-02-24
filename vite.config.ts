import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: "./editor.ts",
      output: {
        dir: ".",
        entryFileNames: "editor.js",
        format: "iife",
      },
    },
  },
});
