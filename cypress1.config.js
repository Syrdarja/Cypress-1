const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    retries: 1,
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 5000,
    viewportWidth: 1080,
    viewportHeight: 1920,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
