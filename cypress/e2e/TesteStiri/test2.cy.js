 describe('Exemplu unde', () =>{
//     it('verfic daca URL contine ceva', () =>{

//         cy.visit('https://https://www.digi24.ro/stiri/actualitate')
//         cy.url().should('include', '/stiri/')

//     })

    it('asteapta 10 secunde', () => {
        cy.visit('https://www.google.com')

        cy.get('#L2AGLb').click();

        cy.wait(10000); //10 secunde 10000 ms

        cy.get('.gLFyf').type('Au trecut 10 secunde')

    })



})
