const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7uni1n",
  video: false,
  e2e: {
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
