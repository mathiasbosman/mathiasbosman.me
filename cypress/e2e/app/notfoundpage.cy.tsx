function checkCorrect404Page(): void {
  cy.get(`main`).should(`be.visible`)
  .within((() => {
        cy.get(`h1`)
        .should(`contain.text`, `This page was not found!`);
        cy.get(`a`)
        .should(`be.visible`)
        .should(`contain.text`, `Return to the homepage`)
        .should(`have.attr`, `href`, `/`);
      })
  );
}

describe(`Not found page tests`, () => {

  it(`404 page is available`, () => {
    cy.visit(`/404`);
    cy.screenshot();
    checkCorrect404Page();
  });

  it(`None existing paths return 404 page`, () => {
    [`/foo`, `/bar`].forEach(uri => {
      cy.visit(uri);
      checkCorrect404Page();
    });
  });

})