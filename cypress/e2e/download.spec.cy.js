/// <reference types="cypress-downloadfile"/>

describe("testing", () => {
  it("downloadtest", () => {
    // Use cy.visit() to navigate to the desired page
    cy.visit("https://www.learnatrise.in/courses/software-testing-training-course/");

    // Use the cy.downloadFile() command to initiate the file download
    cy.downloadFile('https://www.learnatrise.in/wp-content/uploads/2019/03/SOFTWARE-TESTING-training-course_compressed.pdf','mydownloads','example.jpg','MyCustomAgentName')
    // cy.downloadFile({
    //   url: 'https://www.learnatrise.in/wp-content/uploads/2019/03/SOFTWARE-TESTING-training-course_compressed.pdf',
    //   downloadFolder: 'mydownloads', // Folder in cypress/fixtures
    //   fileName: 'example.jpg',
    //   agent: 'MyCustomAgentName'
    // });
  });
});
