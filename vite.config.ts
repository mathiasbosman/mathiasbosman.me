// vite.config.js
import react from "@vitejs/plugin-react"

export default {
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  }
}