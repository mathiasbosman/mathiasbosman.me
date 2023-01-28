describe(`Homepage tests`, () => {

  beforeEach(() => {
    cy.visit(`/`);
  });

  it(`Main and footer section are visible on the page`, () => {
    cy.get(`main`).should(`be.visible`);
    cy.get(`footer`).should(`be.visible`);
  });

  it(`Version and copyright are present on the homepage`, () => {
    cy.get(`[data-version]`).should(`be.visible`)
    .should(`include.text`, new Date().getFullYear())
    .should(`include.text`, `Mathias Bosman`);
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