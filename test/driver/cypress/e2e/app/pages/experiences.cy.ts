import { testOutgoingLinks } from "../../../support/e2e.ts";

describe("Experience page tests", () => {
  beforeEach(() => {
    cy.visit("/experiences");
  });

  it("Required elements are present", () => {
    cy.get("sandbox-experience-page").should("be.visible");
    cy.get("sandbox-navigation").should("be.visible");
    cy.get("sandbox-page-title").should("be.visible");
    cy.get("sandbox-experiences").should("be.visible");
    cy.get("sandbox-footer").should("be.visible");
    cy.screenshot();
  });

  it(`Outgoing links do not return a 404 status`, () => {
    testOutgoingLinks();
  });
});
