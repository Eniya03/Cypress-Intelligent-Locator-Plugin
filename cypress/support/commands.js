Cypress.Commands.add('suggestLocator', (selector) => {
    cy.get(selector).then(($el) => {
      const locators = [];
  
      // Collect stable locators
      const dataTestId = $el.attr('data-testid');
      if (dataTestId) locators.push(`data-testid="${dataTestId}"`);
  
      const ariaLabel = $el.attr('aria-label');
      if (ariaLabel) locators.push(`aria-label="${ariaLabel}"`);
  
      const role = $el.attr('role');
      if (role) locators.push(`role="${role}"`);
  
      const name = $el.attr('name');
      if (name) locators.push(`name="${name}"`);
  
      const title = $el.attr('title');
      if (title) locators.push(`title="${title}"`);
  
      const id = $el.attr('id');
      if (id) {
        // Warn if ID looks dynamic (contains numbers)
        const idIsDynamic = /\d/.test(id);
        if (idIsDynamic) {
          cy.log(`Warning: ID "${id}" may be dynamic and brittle.`);
        }
        locators.push(`id="${id}"`);
      }
  
      // Check for tag name as a fallback
      const tagName = $el.prop('tagName');
      if (tagName) locators.push(`tag:${tagName}`);
  
      // Collect class name as a brittle locator (warn user)
      const className = $el.attr('class');
      if (className) {
        cy.log(`Warning: Class "${className}" may be brittle and unstable.`);
        locators.push(`class="${className}"`);
      }
  
      // Log all locators found
      if (locators.length > 0) {
        cy.log('Suggested Locators:');
        locators.forEach((locator) => cy.log(locator));
      } else {
        cy.log('No stable locators found. Consider adding a data-testid or aria-label.');
      }
    });
  });
  