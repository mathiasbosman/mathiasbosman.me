describe("Not found page tests", () => {
  it("404 page is available", () => {
    cy.visit("/404");
    cy.screenshot();
  });

  it("None existing route gives 404", () => {
    cy.visit("/foo");
    cy.get("h1").should("contain.text", "404");
    cy.title().should("include", "404");
  });

  it("User should be able to navigate back to the root", () => {
    cy.visit("/404");
    cy.get('a[href="/"]').should("be.visible");
  });
});
