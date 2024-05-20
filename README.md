# Cypress Tests README

## Overview

This README provides an overview of Cypress tests written for different scenarios, including basic searches on Google, product searches on eMAG, and URL verification on Digi24.

## Pre-requisites

- Node.js installed on your machine.
- Cypress installed in your project:
  ```bash
  npm install cypress --save-dev  in cmd prompt

## Test Scenarios
Google Search Test
Description
Performs a basic search on Google.com and verifies search results.

### Test Code
google_search_spec.js

Steps
Visit Google homepage.
Accept cookies.
Perform a search for "emag".
Verify that search results are displayed.

### javascript code

    describe('Site Google.com', () => {
    
    it('functioneaza cu o cautare basic', () => {
        cy.visit('https://www.google.com');
        cy.get('#L2AGLb').click();
        cy.get('.gLFyf').type('emag').type('{enter}');
        cy.get('#result-stats').should('exist');
    });
});

### eMAG Product Search Tests
Description
Performs product searches on eMAG.ro and verifies results.

Test Code
emag_product_search_spec.js

Steps for iPhone Search
Open eMAG homepage.
Search for "iPhone".
Verify search results contain the search term.
Check if product images and prices are visible.
Steps for Non-existent Product Search
Open eMAG homepage.
Search for a non-existent product.
Verify that the "No results found" message is displayed.

### javascript code

    describe('Cautare produs pe eMAG', () => {
      beforeEach(() => {
        // Deschide eMAG
      cy.visit('https://www.emag.ro/');
    });

    it('Cauta un telefon iPhone pe eMAG', () => {
      const searchTerm = 'iPhone';

      cy.get('input[name="query"]').type(searchTerm).type('{enter}');

      cy.contains('.product-holder-middle', searchTerm).should('exist');

      cy.get('.product-holder-middle').find('img').should('be.visible');

      cy.get('.product-holder-middle').find('.product-new-price').should('be.visible');
    });

    it('Cauta un produs inexistent pe eMAG', () => {
      const searchTerm = 'produsinexistent123';

      cy.get('input[name="query"]').type(searchTerm).type('{enter}');

      cy.contains('Nu am gasit rezultate').should('be.visible');
      });
    });

  
  ### URL Verification Test
Description
Verifies if a specific part of the URL is present on Digi24.ro.

Test Code
url_verification_spec.js

Steps
Visit the Digi24 news page.
Verify that the URL contains "/stiri/".


### javascript code
    describe('Exemplu unde', () => {

          cy.setCookie('cookie_policy', 'accepted', { path: '/', expiry: Date.now() + 86400000 });
          cy.visit('https://www.digi24.ro/stiri/actualitate');
      });

        it('verific daca URL contine "stiri"', () => {
          cy.url().should('include', 'stiri'); // Verificăm dacă URL-ul conține textul "stiri"
      });
    });


 
Running the Tests
  Open Cypress Test Runner:


npx cypress open

Run tests in headless mode:
npx cypress run


## Screenshots
Google Search Test 
![image](https://github.com/MihaiPopescu31/Cypress-Test/assets/138394009/331cfb6d-4e01-451c-8984-9bab1e6dec42)


eMAG Product Search Tests

![image](https://github.com/MihaiPopescu31/Cypress-Test/assets/138394009/34e46ad7-80df-4ddd-a17d-5cb2f3cdd602)



URL Verification Test

![image](https://github.com/MihaiPopescu31/Cypress-Test/assets/138394009/fc63a758-6f0a-455f-aab3-c6c9d8193f56)



## Conclusion
This README provides an organized overview of Cypress tests for different scenarios. For further details or assistance, refer to the Cypress documentation.
