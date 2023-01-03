describe('Not found page tests', () => {

  const notFoundPages = ['/404', '/foo'];

  notFoundPages.forEach(uri => {
    it (uri + ' uri returns 404 page', () => {
      cy.visit(uri);
      cy.get('main').should('be.visible')
      .within((() => {
            cy.get('h1')
            .should('contain.text', 'This page was not found!');
            cy.get('a')
            .should('be.visible')
            .should('contain.text', 'Return to the homepage')
            .should('have.attr', 'href', '/');
          })
      );
    });
  });

})