import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    polyfillModulePreload: false,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), "index.html"),
        notFound: resolve(process.cwd(), "404.html"),
      },
    },
  },
})
