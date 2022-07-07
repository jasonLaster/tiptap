const { defineConfig } = require("cypress");
const cypressReplay = require("@replayio/cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    integrationFolder: "../",
    testFiles: "{demos,tests}/**/*.spec.{js,ts}",
    defaultCommandTimeout: 15000,
    setupNodeEvents(on, config) {
      cypressReplay.default(on, config);
      return config;
    },
  },
});
