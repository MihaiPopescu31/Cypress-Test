describe('Cautare produs pe eMAG', () => {
  beforeEach(() => {
    // Deschide eMAG
    cy.visit('https://www.emag.ro/');
  });

  it('Cauta un telefon iPhone pe eMAG', () => {
    const searchTerm = 'iPhone';

    // Introdu un termen de cautare si apasa Enter
    cy.get('input[name="query"]').type(searchTerm).type('{enter}');

    // Verifica daca exista rezultate pentru cautare
    cy.contains('.product-holder-middle', searchTerm).should('exist');

    // Verifica daca exista imagine pentru produsul cautat
    cy.get('.product-holder-middle').find('img').should('be.visible');

    // Verifica daca exista prea pentru produsul cautat
    cy.get('.product-holder-middle').find('.product-new-price').should('be.visible');
  });

  it('Cauta un produs inexistent pe eMAG', () => {
    const searchTerm = 'produsinexistent123';

    // Introdu un termen de cautare si apasa Enter
    cy.get('input[name="query"]').type(searchTerm).type('{enter}');

    // Verifica daca mesajul de "Nu am gasit rezultate" este afisat
    cy.contains('Nu am gasit rezultate').should('be.visible');
  });
});

