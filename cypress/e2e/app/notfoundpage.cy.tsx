describe(`Not found page tests`, () => {

  it(`404 page is available`, () => {
    cy.visit(`/404`);
    cy.screenshot();
    cy.check404Page();
  });

  it(`None existing paths return 404 page`, () => {
    [`/foo`, `/bar`].forEach(uri => {
      cy.visit(uri);
      cy.check404Page();
    });
  });

})