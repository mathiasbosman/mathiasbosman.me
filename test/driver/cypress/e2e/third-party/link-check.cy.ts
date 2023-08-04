import { allPages } from '../config.ts'

describe('Outgoing links', () => {

  it('All outgoing links should be reachable', () => {

    interface testedLink {
      href: string,
      page: string
    }

    const checkedLinks: testedLink[] = []
    allPages.forEach(page => {
      cy.visit(page)
      cy.get(`a[href^="http://"],a[href^="https://"]`).each((link) => {
        const testingLink: testedLink = {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          href: link.prop(`href`),
          page: page
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
          cy.log(
            alreadyChecked.href + ' already tested in ' + alreadyChecked.page)
        }
      })
    })
  })

})
