export const testOutgoingLinks = (() => {
  it(`Outgoing links do not return a 404 status`, () => {
    const checkedLinks: string[] = [];
    cy.get(`a`).each((link) => {
      const href = link.prop(`href`);
      if (!checkedLinks.includes(href)) {
        cy.request({
          failOnStatusCode: false,
          url: href,
        })
        .its(`status`)
        .should(`not.eq`, 404);
        checkedLinks.push(href);
      }
    });
  });
})
