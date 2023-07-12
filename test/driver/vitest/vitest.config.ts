// test/driver/vitest/vitest.config.ts
import { defineConfig } from 'vitest/config'
import viteConfig from '../../../vite.config'
export default defineConfig({
  ...viteConfig,
  test: {
    environment: `happy-dom`,
    include: [`./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}`],
    coverage: {
      reportsDirectory: `./tests/driver/vitest/coverage`,
    },
  },
})
