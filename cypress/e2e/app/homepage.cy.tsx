describe(`Homepage tests`, () => {

  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`Required elements are present`, () => {
    cy.screenshot();
    cy.get(`main`).should(`be.visible`);
    cy.get(`footer`).should(`be.visible`);
  });

})