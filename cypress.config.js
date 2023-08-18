const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  projectId: 't4zxug',
  // Rest of your configuration...

  e2e: {
    setupNodeEvents(on, config) {
      // Register the 'task' event for the 'downloadFile' task
      on('task', { downloadFile });
    },
  },
});


