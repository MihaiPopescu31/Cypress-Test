const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  defaultCommandTimeout: 10000, // Timeout implicit pentru comenzi
  pageLoadTimeout: 30000, // Timeout pentru incarcarea paginii
  retries: 2, // Numarul de repetari
  video: false, // Dezactiveaza inregistrarile video (daca nu sunt necesare)
  screenshotsFolder: "cypress/screenshots",
});
