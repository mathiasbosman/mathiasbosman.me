import { defineConfig } from 'cypress';

export default defineConfig({
  screenshotsFolder: './screenshots',
  trashAssetsBeforeRuns: true,
  video: false,

  e2e: {
    baseUrl: 'http://localhost:9000',
    specPattern: 'e2e/**/*.cy.ts',
    supportFile: './support/e2e.js',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(rows) {
          console.table(rows);
          return null;
        },
      });
      return config;
    },
  },
  includeShadowDom: true,
  fixturesFolder: './fixtures',
  component: {
    supportFile: './support/component.ts',
    indexHtmlFile: './support/component-index.html',
    specPattern: 'component/**/*.cy.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
