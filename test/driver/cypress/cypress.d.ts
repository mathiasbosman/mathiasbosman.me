import type { mount } from "cypress/react";
import "cypress-axe";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}
