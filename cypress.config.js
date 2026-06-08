const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://automationpratice.com.br",
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 800,
    viewportHeight: 400,

    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
  },
});
