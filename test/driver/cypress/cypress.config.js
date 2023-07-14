import { defineConfig } from "cypress";

export default defineConfig({
  screenshotsFolder: "./screenshots",
  trashAssetsBeforeRuns: true,
  video: false,
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: false,
    specPattern: "e2e/**/*.cy.ts",
  },
  includeShadowDom: true,
});
