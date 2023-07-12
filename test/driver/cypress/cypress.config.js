import { defineConfig } from 'cypress'

export default defineConfig({
  screenshotsFolder: 'test/driver/cypress/screenshots/',
  video: false,
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: false,
    specPattern: 'test/**/e2e/**/*.cy.ts'
  },
  includeShadowDom: true
})
