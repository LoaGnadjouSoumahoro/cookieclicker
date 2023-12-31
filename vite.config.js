import path from "path";
import { defineConfig } from "vite";
import { copy } from "vite-plugin-copy";

export default defineConfig({
  base: "/testcookie/",
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  css: {
    preprocessorOptions: {},
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "./src/main.js"),
        index: path.resolve(__dirname, "./src/index.html"),
      },
    },
    emptyOutDir: true,
  },
  plugins: [
    copy({
      targets: [
        { src: "./src/audio/clicsound.mp3", dest: "dist/audio" },
        { src: "./src/audio/clicsound2.mp3", dest: "dist/audio" },
      ],
    }),
  ],
});
