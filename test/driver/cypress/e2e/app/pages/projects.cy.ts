import { testOutgoingLinks } from "../../../support/e2e.ts";

describe("About page tests", () => {
  beforeEach(() => {
    cy.visit("/projects");
  });

  it("Required elements are present", () => {
    cy.get("sandbox-projects-page").should("be.visible");
    cy.get("sandbox-navigation").should("be.visible");
    cy.get("sandbox-footer").should("be.visible");
    cy.screenshot();
  });

  it(`Outgoing links do not return a 404 status`, () => {
    testOutgoingLinks();
  });
});
