/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dotenv from "dotenv"
import path from "path"

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    define: {
      __VALUE__: process.env.VALUE,
      "process.env": {}
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    plugins: [react()],
    server: {
      port: 3000
    },
    preview: {
      port: 8000
    }
  }
})
