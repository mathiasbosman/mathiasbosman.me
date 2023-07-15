import { testOutgoingLinks } from "../../../support/e2e.ts";

describe(`Not found page tests`, () => {
  it(`404 page is available`, () => {
    cy.visit(`/404`);
    cy.get("sandbox-navigation")
      .should("be.visible")
      .within(() => {
        cy.get("sandbox-avatar")
          .should("be.visible")
          .within(() => {
            cy.get("a").should("be.visible").should("have.attr", "href", "/");
          });
      });

    cy.get("sandbox-page-title")
      .should("be.visible")
      .should("have.attr", "title", "404 - not found");

    cy.get("sandbox-footer").should("be.visible");
    cy.screenshot();
  });

  it(`Outgoing links do not return a 404 status`, () => {
    testOutgoingLinks();
  });
});
