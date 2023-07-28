import { defineConfig } from 'cypress'

export default defineConfig({
  screenshotsFolder: './screenshots',
  trashAssetsBeforeRuns: true,
  video: false,

  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'e2e/**/*.cy.tsx',
    supportFile: false
  },
  includeShadowDom: true,
  fixturesFolder: './fixtures',
  component: {
    supportFile: './support/component.ts',
    indexHtmlFile: './support/component-index.html',
    specPattern: 'component/**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite'
    }
  }
})
