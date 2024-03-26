describe('Site Google.com', () => {
    
    //testul 1
    it('functioneaza cu o cautare basic', () => {
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('emag').type('{enter}');

        cy.get('#result-stats').should('exist');
    })
    
});
