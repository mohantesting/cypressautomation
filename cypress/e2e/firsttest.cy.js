describe("My first test",()=>
{
it("verify",()=>
{
    cy.visit("https://www.nopcommerce.com/")
    //cy.title.should('','nopCommerce')
    cy.get('svg').click
    cy.wait(2000)
    cy.get('ul[class="navigation-top-menu navigation-top-menu-user-actions"] li:nth-child(2) a:nth-child(1) span:nth-child(1)').click({ force: true })
    cy.title().should('eq', 'Register - nopCommerce');
    
    cy.state('window').then((win) => {
        const browserName = win.navigator.appName;
        const browserVersion = win.navigator.appVersion;
        const userAgent = win.navigator.userAgent;
        // Use the browser properties as needed...
        });
})


})