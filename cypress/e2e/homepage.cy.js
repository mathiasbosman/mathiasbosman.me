describe(`Homepage tests`, () => {

  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`Required elements are present`, () => {
    cy.screenshot();
    cy.get(`main`).should(`be.visible`);
    cy.get(`footer`).should(`be.visible`);
  });

  it(`Outgoing links do not return a 404 status`,() => {
    let checkedLinks = [];
    cy.get(`a`).each(link => {
      const href = link.prop(`href`);
      if (!checkedLinks.includes(href)) {
        cy.request({
          failOnStatusCode: false,
          url: href
        })
        .its(`status`)
        .should(`not.eq`, 404);
        checkedLinks.push(href);
      }
    });
  });

})