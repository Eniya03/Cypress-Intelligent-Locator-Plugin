# Cypress-Intelligent-Locator-Plugin

A Cypress plugin that helps suggest the most reliable and stable locators for elements during test execution. It reduces test flakiness by encouraging best practices for element selection.
----
#  Features

- **Suggests Reliable Locators**: Prioritizes `data-testid`, `aria-label`, or semantic tags over dynamic IDs or classes.
- **Logs Suggestions**: Logs the recommended locator during test execution for debugging.
- **Improves Test Stability**: Encourages best practices in test authoring.

# Installation

Install the plugin as a development dependency:

    ```bash
    npm install --save-dev cypress-intelligent-locator-plugin


#  Usage
## 1. Register the Plugin

Add the following to your cypress/support/index.js file:

    import 'cypress-intelligent-locator-plugin';

## 2. Use the suggestLocator Command

 Use the cy.suggestLocator command to analyze elements and log the best possible locators:

    describe('Intelligent Locator Test', () => {
  it('Logs suggested locators for an element', () => {
    cy.visit('https://example.cypress.io/commands/querying');
    
    // Analyze a button
    cy.suggestLocator('.query-btn');
  });
});

## 3.Output Example

The Cypress test runner will suggest you with the locators like the below output:

<img width="1440" alt="Screenshot 2024-12-18 at 18 23 31" src="https://github.com/user-attachments/assets/8ddddad9-2dc0-44cd-b24b-f78754d2e4fd" />

## 4. Contributions

Contributions are welcome! To contribute:

1.Fork the repository.

2.Create a feature branch:
   
    ```bash
     git checkout -b feature/your-feature-name

3.Commit your changes and push:

      ```bash
      git commit -m "Add new feature"
      git push origin feature/your-feature-name

4.Open a pull request:

## 5. License
This project is licensed under the MIT License.

## 6. Feedback
If you encounter any issues or have suggestions, please open an issue on GitHub.












