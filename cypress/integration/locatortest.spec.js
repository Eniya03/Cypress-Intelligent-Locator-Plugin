describe('Enhanced Locator Suggestion', () => {
    it('Suggests all possible locators for an element', () => {
      cy.visit('https://example.cypress.io/commands/querying');
  
      // Suggest locators for a button element
      cy.suggestLocator('.query-btn');
    });
  });
  