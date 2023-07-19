import { testOutgoingLinks } from '../../../support/e2e.ts'

describe('About page tests', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('Is available', () => {
    cy.screenshot()
  })

  it('Outgoing links do not return a 404 status', () => {
    testOutgoingLinks()
  })
})
