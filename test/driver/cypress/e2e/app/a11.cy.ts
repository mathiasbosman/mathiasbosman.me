import { allPages } from "../config.ts";

describe("A11 checks", () => {
  it("All pages should pass the a11 check", () => {
    allPages.forEach((page) => {
      cy.visit(page);
      cy.injectAxe();
      cy.checkA11y();
    });
  });

  it("All pages have an h1, header, main nav and footer", () => {
    allPages.forEach((page) => {
      cy.visit(page);
      cy.get("h1").should("be.visible");
      cy.get("main").should("be.visible");
      cy.get("nav").should("exist");
      cy.get("header").should("be.visible");
      cy.get("footer").should("be.visible");
      cy.screenshot("pages" + page);
    });
  });
});
