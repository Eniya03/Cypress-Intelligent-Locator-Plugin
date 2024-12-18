# Cypress-Intelligent-Locator-Plugin
A Cypress plugin that helps suggest the most reliable and stable locators for elements during test execution. It reduces test flakiness by encouraging best practices for element selection.
----
##  Features

- **Suggests Reliable Locators**: Prioritizes `data-testid`, `aria-label`, or semantic tags over dynamic IDs or classes.
- **Logs Suggestions**: Logs the recommended locator during test execution for debugging.
- **Improves Test Stability**: Encourages best practices in test authoring.

## Installation

Install the plugin as a development dependency:

```bash
npm install --save-dev cypress-intelligent-locator-plugin




