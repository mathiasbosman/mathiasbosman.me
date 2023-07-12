describe('Homepage tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Required elements are present', () => {
    cy.get('sandbox-home-page').should('be.visible')
    cy.screenshot();
  });

})
