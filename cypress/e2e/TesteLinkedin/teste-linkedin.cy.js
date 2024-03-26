describe('Autentificare pe LinkedIn', () => {
    it('Logare cu credențiale valide', () => {
        cy.visit('https://www.linkedin.com/');

        // Deschide formularul de autentificare
        cy.get('.nav__button-secondary').click();

        // Introducerea numelui de utilizator și a parolei
        cy.get('#username').type('mihai.gabrielpopescu1@gmail.com');
        cy.get('#password').type('Z2y-/K/FqwL-7&n');

        // Apăsă butonul de autentificare
        cy.get('.btn__primary--large').click(); // S-a adăugat punctul înainte de clasa CSS "btn__primary--large"
    });
});
