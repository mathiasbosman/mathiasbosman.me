import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('Not found page tests', () => {
  it('404 page is available', () => {
    cy.visit('/404')
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    cy.visit('/404')
    testOutgoingLinks()
  })

  it('None existing route gives 404', () => {
    cy.visit('/foo')
    cy.get('h1').should('contain.text', '404')
    cy.title().should('include', '404')
  })
})
