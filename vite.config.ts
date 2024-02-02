import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "./node_modules/@uswds/uswds/dist/fonts",
          dest: "assets",
        },
        {
          src: "./node_modules/@uswds/uswds/dist/img",
          dest: "assets",
        },
        {
          src: "./public/fonts/open-sans",
          dest: "assets/fonts",
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
});
