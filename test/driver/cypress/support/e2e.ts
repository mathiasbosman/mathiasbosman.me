/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-argument */
interface testedLink {
  href: string,
  test: string
}

export const testOutgoingLinks = () => {
  const checkedLinks: testedLink[] = []
  cy.get(`a[href^="http://"],a[href^="https://"]`).each((link) => {
    const testingLink: testedLink = {
      href: link.prop(`href`),
      test: Cypress.currentTest.title
    }
    const alreadyChecked = checkedLinks.find(
      link => link.href === testingLink.href)

    if (alreadyChecked === undefined) {
      cy.request({
        failOnStatusCode: false,
        url: testingLink.href,
      })
      .its(`status`)
      .should(`not.eq`, 404)
      checkedLinks.push(testingLink)
    } else {
      cy.log(alreadyChecked.href + ' already tested in ' + alreadyChecked.test)
    }
  })
}
